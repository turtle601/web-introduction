function main() {
  console.log('hello');
  const el = document.getElementById('myForm');

  el.addEventListener('click', (e) => {
    const name = document.querySelector('input.movie').value;

    const checkedCount = document.querySelectorAll(
      "input[type='checkbox']:checked"
    ).length;

    alert(`${name}, ${checkedCount}개의 영화가 취향이 일치하시는군요`);
  });
}

main();
