interface HeaderProps {
    title?: string;
    description?: string;
    children?: React.ReactNodeArray | React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({children}: HeaderProps) => {
	return (
		<header>
			<style jsx>{`
                //     to do: self host
                @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
            `}</style>
		
			{children}
		</header>
	);
};

export { Header };
