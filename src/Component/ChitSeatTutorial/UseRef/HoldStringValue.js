import React, { useRef } from 'react';

const HoldStringValue = () => {
    const textAreaE1 = useRef(null);
    const stringValue = useRef("This is a string saved via the ref object ---");

    const handleClick = () => {
        textAreaE1.current.value = stringValue.current + "This is story of your life . You are human being ";
        textAreaE1.current.focus();
    }

    return (
        <div>
            <section>
                <div>
                    <button type="submit" onClick={handleClick}>Focus and Populate Text Field</button>
                </div>
                <label htmlFor="story" style={{ display: "block", background: "yellow", margin: "1em" }}>
                    The input box below will be focused and populated with some text
                    (imperatively) upon clicking the button above.
                </label>
                <textarea ref={textAreaE1} id="story" rows="5" cols="33"></textarea>
            </section>
        </div>
    );
};

export default HoldStringValue;