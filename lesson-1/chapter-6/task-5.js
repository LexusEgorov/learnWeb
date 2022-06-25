function spy(f){
  
  function wrapper(...rest){
    wrapper.calls.push(rest);
    return f.apply(this, rest);
  }

  wrapper.calls = [];

  return wrapper;
}

function delay(f, ms = 1000){
  
  return function(...rest){
    setTimeout(() => {f.apply(this, rest)}, ms);
  }
}

function debounce(f, ms) {
  let isActive = false;
  return function(...rest){
    if(isActive){
      return;
    }
    isActive = true;
    f.apply(this, rest);
    setTimeout(() => isActive = false, ms)
  };
}

function throttle(f, ms){
  let isActive = false;
  let args;
  let context;

  function wrapper(...rest){
    if(isActive){
      args = rest;
      context = this;
      return;
    }

    f.apply(this, rest);
    isActive = true;

    setTimeout(() => {
      isActive = false;
      if(args){
        wrapper.apply(context, args);
        args = null;
        context = null;
      }
    }, ms);
  }

  return wrapper;
}