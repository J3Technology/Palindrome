const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const isPalindrome = (word) => {
  const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(cleanWord)
  const reverseWord = cleanWord.split('').reverse().join('');
  if(cleanWord === reverseWord){
    result.innerText = `${word} is a palindrome`
  }else{
    result.innerText = `${word} is not a palindrome`
  }
}

const checkInput = () => {
  if(textInput.value === ''){
    alert('Please input a value');
  }else{
    isPalindrome(textInput.value);
  }
}

checkButton.addEventListener('click', checkInput)

