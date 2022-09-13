function emailValidation() {
  const form = document.getElementById('form');     //変数form　　id=formを取得
  const element = document.createElement('p')     //htmlにp要素を作成
  const message = document.createTextNode("Eメールが一致しません")   //変数messageにテキストノードを作成
  const parent = document.getElementById('email_confirm')
  const confirm = document.getElementById('confirm_area')
  element.setAttribute('id', 'alert');
  parent.addEventListener('input', e => {          //form入力中　          
    if(form.email.value !== form.email_confirm.value) {  //もしemail,email_confirmの値が一致しない時
      parent.appendChild(element);                    //parent要素に変数elementを子要素として挿入
      element.appendChild(message);                    //変数elementにmessageを子要素として挿入
      element.classList.add("alert");           //p要素にclass属性alertを追加
      parent.classList.add("alert_bg");
      confirm.parentNode.insertBefore(element,confirm)       //
    } else {
        element.parentNode.removeChild(element);
        parent.classList.add("em");
    }
  });
};

window.onload = emailValidation;

