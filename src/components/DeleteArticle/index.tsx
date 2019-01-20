import * as React from "react";
import { Button } from "../../ui/Button";
import { connect } from 'react-redux';
import { removeArticle } from "../../store/articles/actions";

const MapDispatchToProps = (dispatch: any) => {
  return {
    removeArticle: (id: string) => dispatch(removeArticle(id))
  };
};

const ConnectedDeleteArticle = (props: any) => {
  const { id } = props;
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault();
    props.removeArticle(id);
  }
  return <Button className='btn btn-danger' type='button' handleClick={handleClick} desc='Remove' />;
};

const DeleteArticle = connect(null, MapDispatchToProps)(ConnectedDeleteArticle);

export default DeleteArticle;
