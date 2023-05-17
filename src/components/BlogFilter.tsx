import React, {FormEvent, useState} from 'react';

export const BlogFilter = ({postQuery, setSearchParams}: any) => {

    const [search, setSearch] = useState(postQuery)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const query = form.search.value

        const params = {}

        if (query.length) { // @ts-ignore
            params.post = query
        }

        setSearchParams(params)
    }

    return (
        <form style={{margin: '20px'}} autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="search" value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
            <input type="submit" value="Search"/>
        </form>
    )
}