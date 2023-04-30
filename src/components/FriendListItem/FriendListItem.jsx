import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={`${style.status} ${isOnline ? style.online : style.offline}`}
      ></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p class={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
