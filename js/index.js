import { setPokemon } from "./pokedex.js"
const $form = document.querySelector('#form') 
const $next = document.querySelector('#next-pokemon') 
const $prev = document.querySelector('#prev-pokemon') 
const $pokedex = document.querySelector('#pokedex')
const $random = document.querySelector('#random-pokemon')


 
$form.addEventListener('submit', handleSubmit)
$next.addEventListener('click', handleNextPokemon)
$prev.addEventListener('click', handlePrevPokemon)
$random.addEventListener('click', handleRandomPokemon)


let activePokemon =null

async function handleSubmit(event) {
      $pokedex.classList.add('is-open')
      event.preventDefault()
      const form = new FormData($form)
      const id = form.get("id")
      activePokemon = await setPokemon(id)
}


async function handleNextPokemon() {
      const id = (activePokemon === null || activePokemon.id === 898) ? 1 : activePokemon.id + 1
      activePokemon = await setPokemon(id)
}


async function handlePrevPokemon() {
       const id = (activePokemon === null || activePokemon.id === 1) ? 898 : activePokemon.id - 1
      activePokemon = await setPokemon(id)
}

async function handleRandomPokemon() {
  const minId = 1;
  const maxId = 898;
  const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  activePokemon = await setPokemon(randomId);
}

