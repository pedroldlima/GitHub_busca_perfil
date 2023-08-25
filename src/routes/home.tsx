import Search from "../components/Search";
import { useState } from "react";
import { UserProps } from "../types/user";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async (userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        const userData: UserProps = {
            avatar_url: data.avatar_url,
            login: data.login,
            location: data.location,
            followers: data.followers,
            following: data.following,
        };

        setUser(userData);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <p>{user.login}</p>}
        </div>
    );
};

export default Home;
