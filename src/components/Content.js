import './Content.css';
import LogoInContent from './LogoInContent';

export default function Content() {
  return (
    <div className="content">
      <h1>Fun facts about React</h1>
      <div className="content__logo-container">
        <LogoInContent />
      </div>
      <ul class="content__facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>);
}


