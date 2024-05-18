import axiosInstance from '@/api/axiosInstance';

const GuideService = () => {
    const create = async (payload) => {
        const { data } = await axiosInstance.post('/guides', payload);
        return data;
    }

    const getAll = async (query) => {
        const { data } = await axiosInstance.get(`/guides`, {params: query});
        return data;
    }

    const getById = async (id) => {
        const { data } = await axiosInstance.get(`/guides/${id}`);
        return data;
    }

    const update = async (payload) => {
        const { data } = await axiosInstance.put('/guides', payload);
        return data;
    }

    const deleteById = async (id) => {
        const { data } = await axiosInstance.delete(`/guides/${id}`);
        return data;
    }

    return {
        create,
        getById,
        update,
        deleteById,
        getAll,
    }
}

export default GuideService;
