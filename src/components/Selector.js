import React, { Fragment } from "react"

function Selector({ names, ViewPart, SetViewPart, groupname, center, onChange }) {


    function ViewPartOnChange(e) {
        SetViewPart(parseInt(e.target.value));
    }
    return (
        <>
            <div className="MemberInfoSelector">

                <fieldset onChange={ViewPartOnChange}>
                    {
                        names.map((name, index) => {
                            return (
                                <Fragment key={index}>
                                    <input id={name} type="radio" name={groupname} value={index} defaultChecked={parseInt(ViewPart) === parseInt(index)} />
                                    <label htmlFor={name} className="MemberSelText w_3">{name}</label>
                                </Fragment>
                            )
                        })
                    }
                </fieldset>
            </div>

            <div className="MemberInfoSelectorLeftShadow"></div>
            <div className="MemberInfoSelectorRightShadow"></div>

        </>
    )
}


export default Selector;