import axiosInstance from '@/api/axiosInstance';

const EquipmentService = () => {
    const create = async (payload) => {
        const { data } = await axiosInstance.post('/equipments', payload);
        return data;
    }

    const getAll = async (query) => {
        const { data } = await axiosInstance.get(`/equipments`, {params: query});
        return data;
    }

    const getById = async (id) => {
        const { data } = await axiosInstance.get(`/equipments/${id}`);
        return data;
    }

    const update = async (payload) => {
        const { data } = await axiosInstance.put('/equipments', payload);
        return data;
    }

    const deleteById = async (id) => {
        const { data } = await axiosInstance.delete(`/equipments/${id}`);
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

export default EquipmentService;
