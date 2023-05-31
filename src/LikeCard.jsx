import { useState } from "react";

export function LikeCard({userName, name, initialIsFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-button-card-like is-following' : 'tw-button-card-like'

    const handeClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-card-like">
            <header className="tw-header-card-like">
                <img className="tw-avatar-card-like" src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div className="tw-info-card-like">
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handeClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}