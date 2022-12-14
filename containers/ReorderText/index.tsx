import { useCallback, useState, ChangeEvent } from 'react';

import { helpers } from '../../utils/helpers';

type InitialStateType = {
  text: string;
  reorderedText: string;
};

const initialState: InitialStateType = {
  text: '',
  reorderedText: '',
};

export const ReorderTextContainer = () => {
  const [text, setText] = useState(initialState.text);
  const [reorderedText, setReorderedText] = useState(initialState.reorderedText);

  const onChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  }, []);

  const onSubmit = useCallback((currentText: string) => {
    setReorderedText(helpers.reverseText(currentText));
  }, []);

  const onClear = useCallback(() => {
    setText(initialState.text);
    setReorderedText(initialState.reorderedText);
  }, []);

  const isDisabled = () => !Boolean(text);

  return (
    <div>
      <h1>Reorder Text</h1>
      <label htmlFor="textReorder">Type any text and reorder it to see how it looks.</label>
      <input id="textReorder" type="text" name="text" value={text} onChange={onChange} />
      <button type="button" onClick={() => onSubmit(text)} disabled={isDisabled()}>
        Reorder
      </button>
      <button type="button" onClick={onClear} disabled={isDisabled()}>
        Clear
      </button>
      {reorderedText && <p>{reorderedText}</p>}
    </div>
  );
};
