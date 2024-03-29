import { useState, useCallback } from 'react';

function useInput(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [reset, onChange, reset];
}

export default useInput;
