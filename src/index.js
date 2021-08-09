FormVerify = {
  valid: (e,s)=>{
    if(e.classList.contains(`is-invalid`))e.classList.remove(`is-invalid`);
    if(!e.classList.contains(`is-valid`)){
      e.classList.add(`is-valid`);
    }
    if(s){
      let f = e.getElementByClassName(`valid-feedback`)[0]?(()=>{
        let f = document.createElement(`DIV`);
        f.classList.add(`valid-feedback`);
        e.parentElement.append(f);
        return f;
      })();
      f.textContent = s;
    }
  },
  invalid: (e,s)=>{
    if(e.classList.contains(`is-valid`))e.classList.remove(`is-valid`);
    if(!e.classList.contains(`is-invalid`)){
      e.classList.add(`is-invalid`);
    }
    if(s){
      let f = e.getElementByClassName(`valid-feedback`)[0]?(()=>{
        let f = document.createElement(`DIV`);
        f.classList.add(`valid-feedback`);
        e.parentElement.append(f);
        return f;
      })();
      f.textContent = s;
    }
  }
}
