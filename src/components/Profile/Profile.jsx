import { html } from 'htm/preact';

import avatarImg from '../../assets/avatar.jpeg';
import styles from './Profile.module.css';

export default function Profile() {
	return html`<div class=${styles.profile}>
		<img src=${avatarImg} width=${80} height=${80} alt="Jessica Randall" />
		<div class=${styles['title-box']}>
			<h2>Jessica Randall</h2>
			<p>London, United Kingdom</p>
		</div>
		<p>
			${String.fromCharCode(698)}Front-end developer and avid
			reader.${String.fromCharCode(698)}
		</p>
		<ul class=${styles['social-links']}>
			<li>
				<a
					href="#"
					class="btn btn--primary btn--full"
					rel="noopener"
					target="_blank"
				>
					GitHub
				</a>
			</li>
			<li>
				<a
					href="#"
					class="btn btn--primary btn--full"
					rel="noopener"
					target="_blank"
				>
					Frontend Mentor
				</a>
			</li>
			<li>
				<a
					href="#"
					class="btn btn--primary btn--full"
					rel="noopener"
					target="_blank"
				>
					LinkedIn
				</a>
			</li>
			<li>
				<a
					href="#"
					class="btn btn--primary btn--full"
					rel="noopener"
					target="_blank"
				>
					Twitter
				</a>
			</li>
			<li>
				<a
					href="#"
					class="btn btn--primary btn--full"
					rel="noopener"
					target="_blank"
				>
					Instagram
				</a>
			</li>
		</ul>
	</div>`;
}
