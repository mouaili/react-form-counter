import { useId, useRef } from 'react';
import Button from './Button';

function TasksForm({ isCounterStarted, counterStarted, onSubmit }) {
  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit({
      title: titleInput.current.value,
      description: descriptionInput.current.value,
    });
    titleInput.current.value = '';
    descriptionInput.current.value = '';
  };

  const id = useId();
  const titleInput = useRef();
  const descriptionInput = useRef();

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='mb-3'>
        <label htmlFor={`${id}-title`}>Un Titre : </label>
        <input
          ref={titleInput}
          id={`${id}-title`}
          type='text'
          className='form-control'
          placeholder='Un simple titre..'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor={`${id}-description`}>Une Description : </label>
        <textarea
          ref={descriptionInput}
          id={`${id}-description`}
          type='text'
          className='form-control'
          rows='3'
          placeholder='Décrivez votre Stroy..'
        />
      </div>
      <Button type='button' isCounterStarted={isCounterStarted}>
        {counterStarted ? 'Stop' : 'Start'}
      </Button>
    </form>
  );
}

export default TasksForm;
