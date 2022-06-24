import { useState, useMemo, useRef } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
export default function Search(props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(() => createAutocomplete({
    onStateChange: ({state}) => setAutocompleteState(state),
    getSources: () => [{
      sourceId:'apiFantur',
      getItems: ({query}) => {
        if (!!query) {
          return fetch('')
          .then(res => res.json())
        }
      }
    }]
  }), [props]) 

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <div>
      <form className="flex justify-center mb-20" {...formProps}>
        <div className="flex relative p-1 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-full">
          <input className="flex-1 p-2 pl-4 rounded-full" type="text" placeholder="Search" {...inputProps} />
        </div>
      </form>
    </div>
  );
}
