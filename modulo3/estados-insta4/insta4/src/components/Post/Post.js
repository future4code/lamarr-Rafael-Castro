import React, {useState} from 'react'
import * as All from './PostStyle'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconFlagOn from '../../img/flagInstagramOn.jpg'
import iconFlagOff from '../../img/flagInstagramOff.jpg'


function Post(props){
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [inputComment,setInputComment] = useState('')
  const [flag, setFlag] = useState(false)

	const handleInputComment = (event) => {
		setInputComment(event.target.value)
    console.log(event.target.value)
	}

  let flagIcon
  
  if(flag){
    flagIcon = iconFlagOn
  } else {
    flagIcon = iconFlagOff
  }

  const onClickFlag = () => {
    setFlag(!flag)
  }

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if(!curtido){
      setnumeroCurtidas(numeroCurtidas+1)
    } else {
      setnumeroCurtidas(numeroCurtidas-1)
    }
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario input={inputComment} aoEnviar={aoEnviarComentario} onChangeComentario={handleInputComment}/>
    }
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputComment('')
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario input={inputComment} aoEnviar={aoEnviarComentario} onChangeComentario={handleInputComment}/>
    }

  return(
    <All.PostContainer>
      <All.PostHeader>
        <All.UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
        <img src={flagIcon} onClick={onClickFlag}></img>
      </All.PostHeader>

      <All.PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <All.PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </All.PostFooter>
      {componenteComentario}
    </All.PostContainer>
  )
}

export default Post