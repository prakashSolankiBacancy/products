function Radio({option, onChange}) {

    const onRadioChange = (e) => {
        onChange(e.target.id)
    }

    return (
        <div>
            <p>
                <label>
                    <input class="with-gap" id={option.name} name="group3" type="radio" checked={option.checked} onChange={onRadioChange}/>
                    <span>{option.name}</span>
                </label>
            </p>
        </div>
      );
   
}

export default Radio;