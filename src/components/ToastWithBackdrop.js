import './ToastWithBackdrop.css';
import classNames from "classnames";

export default function ToastWithBackdrop(showToastRef) {
  return (
    <article id="backdrop" className={classNames({ show: showToastRef ? true : false })} >
      <div className={classNames('show-from-button', 'toast', { show: showToastRef ? true : false })} >
        <div className="textWrap">
          toastHeaderText
          toastText
        </div>
      </div>
    </article>);
}


