import Link from "next/link";

const Index = () => {
    console.log('Im the Index component');
    return (
        <div>
            <Link href='/about'><a>About Page</a></Link>
            <Link href='/contact'><a>Contact Page</a></Link>
            <h1>Our Index Page!!</h1>
        </div>
    )
};

export default Index;