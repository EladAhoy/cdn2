import { useEffect } from 'react';
import './ToastWithBackdrop.css';

export default function ToastWithBackdrop(props) {
  useEffect(() => {
    const textDiv = document.querySelector('.toast');
    if (props.show) textDiv?.classList.add('show');
    else textDiv?.classList.remove('show');
  }, [props.show]);
  return (
    <article id="backdrop show">
      <div className="toast">
        <div className="textWrap">
          <h1>Welcome!</h1>
        </div>
      </div>
    </article>);
}


