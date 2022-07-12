import React,{useState} from 'react'
import * as All from './ComentarioStyle'


export function SecaoComentario(props) {
	return (
		<All.CommentContainer>
			<All.InputComentario className='InputComentario'
				placeholder={'Comentário'}
				value={props.input}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</All.CommentContainer>
	)
}