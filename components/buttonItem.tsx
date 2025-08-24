import Image from 'next/image';
import Link from "next/link";

import styles from './buttonGroup.module.css';

type ButtonProps = {
    content: string,
    linkHref: string,
    linkImage: string,
    linkAlt: string,
    width: number,
    height: number,
}

export default function ButtonItem({ content, linkHref = "/", linkImage, linkAlt, width = 48, height = 48 }: ButtonProps) {
    return (
        <Link href={linkHref} className={styles.buttonItem}>
            <Image src={linkImage} alt={linkAlt} width={width} height={height} />
            <p>{content}</p>
        </Link>
    );
}