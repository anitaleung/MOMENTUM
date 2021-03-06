import { SetCurrTaskAction } from '../../action-types';
import ac from './action-creators';

export const handleOnChange = (event: React.FormEvent<HTMLInputElement>) : SetCurrTaskAction => {
  // NOTE: We may not need this action handler
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  const target = event.target as HTMLInputElement;
  // TODO: currentTask.name = target.value (via action-creator)
  return ac.setCurrentTask(target.value);
};

// TODO: this is not idiomatic redux. `alert` is a side effect.
// Look into ways of improving this
export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
  // TODO: handles what happens when the user saves a new task
  event.preventDefault();
  const data = new FormData(event.target as HTMLFormElement);
  alert('You made a new task ' + /* taskName */ 'FIXME' + '!');

  fetch('/api/form-submit-url', {
    body: data,
    method: 'POST',
  });
};

export default {
  handleOnChange,
  handleSubmit
};
