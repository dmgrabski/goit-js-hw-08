document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageTextarea = form.querySelector('textarea[name="message"]');
  
    const loadFormState = () => {
      const savedState = localStorage.getItem('feedback-form-state');
      if (savedState) {
        const formState = JSON.parse(savedState);
        emailInput.value = formState.email || '';
        messageTextarea.value = formState.message || '';
      }
    };
  
    loadFormState();
  
    const saveFormState = () => {
      const formState = {
        email: emailInput.value,
        message: messageTextarea.value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formState));
    };
  
    const saveFormStateThrottled = _.throttle(saveFormState, 500);
  
    emailInput.addEventListener('input', saveFormStateThrottled);
    messageTextarea.addEventListener('input', saveFormStateThrottled);
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      console.log({
        email: emailInput.value,
        message: messageTextarea.value,
      });
  
      localStorage.removeItem('feedback-form-state');
      form.reset();
  
      saveFormStateThrottled.cancel();
    });
  });
  
  