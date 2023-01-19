const idInput = document.querySelector(".id");
const pwInput = document.querySelector(".pwd");
const pwcInput = document.querySelector(".pwd-again");
const pwdOut = document.querySelector(".password-verifier");
const privacyCheck = document.querySelector(".privacy-check");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (evt)=>{
  if(idInput.value === ""){
    pwdOut.textContent = "ID를 입력해 주세요.";
    return;
  }
  if(pwInput.value === ""){
    pwdOut.textContent = "비밀번호를 입력해 주세요.";
    return;
  }
  if(pwInput.value !== pwcInput.value){
    pwdOut.textContent = "비밀번호와 임시번호가 일치하지 않습니다."
    return;
  }
  if(!privacyCheck.checked){
    pwdOut.textContent = "개인정보 이용에 동의해 주세요.";
    return;
  }
  alert("가입이 완료되었습니다!");
});
submitBtn.addEventListener("keyup", (evt)=>{

});