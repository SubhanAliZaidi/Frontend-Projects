// Naziya = 'naziya'
const colorbox = document.querySelector('.colorbox');
const whitebox = document.querySelector('.whitebox');
const transparentbox = document.querySelector('#transparentbox');
const transparentbox1 = document.querySelector('#transparentbox1');

function formchange() {
  var computed = getComputedStyle(document.querySelector('.colorbox'));

  if (computed.left === '0px') {
    transparentbox1.style.zIndex = 1;
    setTimeout(() => {
      colorbox.style.left = '50%';
      whitebox.style.right = '50%';
      transparentbox.style.left = '-130%';
      transparentbox.style.opacity = 0;
      transparentbox1.style.opacity = 1;
      transparentbox1.style.right = '0%';
      transparentbox.style.zIndex = -1;
    }, 100);

    setTimeout(() => {
      whitebox.innerHTML = `<h1>login</h1><p style="color:rgb(170, 170, 170); font-size:14px;">---With---</p><div><img src="./Assets/icon/facebook.png" alt=""><img src="./Assets/icon/twitter.png" alt=""><img src="./Assets/icon/github.png" alt=""><img src="./Assets/icon/linkedin.png" alt=""></div><p style="color:rgb(170, 170, 170); font-size:14px;">---or---</p><p>use your credential to login</p><input type="email" placeholder="Email" name='name' required/><input type="password" placeholder="Password" name='email' required/><p>Forgot Your Password ?</p><button type="submit" class='submitbtn'>submit</button>`
    }, 450);

  } else {
    colorbox.style.left = '0%';
    whitebox.style.right = '0%';
    transparentbox.style.left = '0%';
    transparentbox.style.opacity = 1;
    transparentbox1.style.opacity = 0;
    transparentbox1.style.right = '-30%';
    transparentbox.style.zIndex = 1;
    setTimeout(() => {
      transparentbox1.style.zIndex = -1;
    }, 100);

    setTimeout(() => {
      whitebox.innerHTML = `<h1>Create Account</h1><p style="color:rgb(170, 170, 170); font-size:14px;">---With---</p><div><img src="./Assets/icon/facebook.png" alt="" /><img src="./Assets/icon/twitter.png" alt="" /><img src="./Assets/icon/github.png" alt="" /><img src="./Assets/icon/linkedin.png" alt="" /></div><p style="color:rgb(170, 170, 170); font-size:14px;">---Or---</p><p>Use your Mail for registration</p><input type="text" placeholder="Name" spellcheck="false" name='name' required/><input type="email" placeholder="Email" spellcheck="false" name='email' required/><input type="password" placeholder="Password" spellcheck="false" name='password' required/><button type="submit" class="submitbtn">Submit</button>`
    }, 350);
  }
}