import {useRouter} from "next/router";
import Navigation from "../../components/Navigation";
import styles from '../../styles/User.module.scss';
import MainContainer from "../../components/MainContainer";

export default function User({user}){

    const {query} = useRouter();
    return(
        <MainContainer keywords={user.name}>
        <h1 className={styles.user}>User {query.id}</h1>
            <h2 className={styles.userName}>{user.name}</h2>
        </MainContainer>
    )
}


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: {user}, // will be passed to the page component as props
    }
}