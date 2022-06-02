import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const stringifyData = data => JSON.stringify(data, null, 2);
    const initialData = stringifyData({ data: null });
    const loadingData = stringifyData({ data: 'loading...' });

    const [data, setData] = useState(initialData);
    const [gender, setGender] = useState('female');

    const [loading, setLoading] = useState(false);
    useEffect(() => {

        const fetchData = () => {
            setLoading(true);
            const uri = 'https://randomuser.me/api/?gender=' + gender
            fetch(uri)
                .then(res => res.json())
                .then(({ results }) => {
                    setLoading(false)
                    const { name, gender, dob } = results[0]
                    const dataValue = stringifyData({
                        ...name,
                        gender,
                        age: dob.age
                    })
                    setData(dataValue)
                })
        }
        fetchData()

    }, [gender])

    return (
        <div>
            <button onClick={() => setGender('male')} style={{ outline: gender === 'male' ? '1px solid' : 0 }}> fetch male user</button>
            <button onClick={() => setGender('female')} style={{ outline: gender === 'female' ? '1px solid' : 0 }}> fetch female user  </button>
            <section>
                {loading ? <pre>{loadingData}</pre> : <pre>{data}</pre>}
            </section>

        </div>
    );
};

export default FetchData;