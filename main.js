const nodes = document.querySelectorAll('.a');
nodes.forEach((node) => {
  node.addEventListener('click', (e) => {
    nodes.forEach(ele => {
      if(ele === e.target){
        ele.style.color = '#6ABCEA'
      } else {
        ele.style.color = 'white'
      }
    })
  })
})

function toggleBox1(){
    document.getElementById('box1').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox2(){
    document.getElementById('box2').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox3(){
    document.getElementById('box3').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox4(){
    document.getElementById('box4').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox5(){
    document.getElementById('box5').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox6(){
    document.getElementById('box6').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox7(){
    document.getElementById('box7').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox8(){
    document.getElementById('box8').classList.toggle('active')
    document.body.classList.toggle('active')
}

function toggleBox9(){
    document.getElementById('box9').classList.toggle('active')
    document.body.classList.toggle('active')
}
