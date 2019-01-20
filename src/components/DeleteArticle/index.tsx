import * as React from "react";
import { Button } from "../../ui/Button";
import { connect } from 'react-redux';
import { removeArticle } from "../../store/articles/actions";
import { Dispatch } from 'redux';
import { IDelete } from '../../types/types';

const MapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeArticle: (id: string) => dispatch(removeArticle(id))
  };
};

const ConnectedDeleteArticle = (props: IDelete) => {
  const { id } = props;
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault();
    props.removeArticle(id);
  }
  return <Button className='btn btn-danger' type='button' handleClick={handleClick} desc='Remove' />;
};

const DeleteArticle = connect(null, MapDispatchToProps)(ConnectedDeleteArticle);

export default DeleteArticle;
