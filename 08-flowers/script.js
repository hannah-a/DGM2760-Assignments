const name = 'Hannah'
const question = {
  stem: `What is ${name}'s favorite flower?`,
  option1: 'Sunflowers',
  option2: 'Pansies',
  option3: 'Roses',
  option4: 'Daisies',
  correct: 2,
  display() {
      document.querySelector('.main__stem').textContent = question.stem
      document.querySelector('.main__button-1').textContent = question.option1
      document.querySelector('.main__button-2').textContent = question.option2
      document.querySelector('.main__button-3').textContent = question.option3
      document.querySelector('.main__button-4').textContent = question.option4
  },
  check(userChoice) {
    if (userChoice === question.correct) {
        document.querySelector('.main__feedback').textContent = 'You are correct!'
    } else {
        document.querySelector('.main__feedback').textContent = 'You are wrong!'
    }
  }
}
console.log(question.stem)

document.querySelector('.main__button-1').addEventListener('click', () => {question.check(1)})
document.querySelector('.main__button-2').addEventListener('click', () => {question.check(2)})
document.querySelector('.main__button-3').addEventListener('click', () => {question.check(3)})
document.querySelector('.main__button-4').addEventListener('click', () => {question.check(4)})

question.display()