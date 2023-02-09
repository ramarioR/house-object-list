import Link from "next/link";
import { useState } from "react";
import style from "./pagination.module.scss";

export default function Pagination({totalPages, activePage, onClick}) {
    return (
        <>
            <div className={style.pagination}>{Array.from({length: totalPages}, (_, i) => i + 1).map(page => {
                return (
                    <>
                        <Link 
                            className={`${style.pagination__btn} ${+page === +activePage ? style.is_active : ''}`}
                            href={`/`}
                            as={`/?page=${page}`}
                            key={page}
                            onClick={e => {
                                e.preventDefault();
                                onClick(page)
                            }}
                        >
                            {page}
                        </Link>
                    </>
                )
            })}</div>
        </>
    )   
}