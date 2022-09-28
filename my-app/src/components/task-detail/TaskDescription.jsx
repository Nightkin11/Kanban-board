import React from 'react';
import { EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';



export default function TaskDescription(props) {
  return (
    <div>
      <EditTextarea 
		name='description'
		rows={8}
		style={{padding: '0', fontSize: '18px', margin: '2rem 0'}}
	  	defaultValue={props.defaultValue}
	  	placeholder='This task has no description. Click to add description'
		onChange={props.onChange}
		onSave={props.onSave}
		value={props.value}
	  />
    </div>
  );
}