import Link from "next/link";
import Navigation from "../components/Navigation";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer keywords={'user'}>

            <h1>List of users</h1>
            <ul>
                {users.map((user) =>
                    <li className={'user'} key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    return {
        props: {users}, // will be passed to the page component as props
    }
}