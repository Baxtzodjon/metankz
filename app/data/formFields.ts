export type FormData = {
    name: string;
    phone: string;
    message: string;
};

export type FieldConfig = {
    name: keyof FormData;
    labelKey: string;
    type: string;
    placeholderKey: string;
    validation?: {
        required?: string;
        pattern?: { value: RegExp; message: string };
        minLength?: { value: number; message: string };
    };
};

export const formFields: FieldConfig[] = [
    {
        name: "name",
        labelKey: 'KnowForm.fields.name.label',
        type: 'text',
        placeholderKey: 'KnowForm.fields.name.placeholder',
        validation: {
            required: "KnowForm.errors.name.required",
            pattern: {
                value: /^[A-Za-zА-Яа-я\s]+$/,
                message: "KnowForm.errors.name.pattern",
            },
        },
    },
    {
        name: "phone",
        labelKey: 'KnowForm.fields.phone.label',
        type: 'tel',
        placeholderKey: 'KnowForm.fields.phone.placeholder',
        validation: {
            required: "KnowForm.errors.phone.required",
            pattern: {
                value: /^[\d\s()+-]{7,20}$/,
                message: "KnowForm.errors.phone.pattern",
            },
        },
    },
    {
        name: "message",
        labelKey: 'KnowForm.fields.message.label',
        type: 'text',
        placeholderKey: 'KnowForm.fields.message.placeholder',
        validation: {
            minLength: {
                value: 10,
                message: "KnowForm.errors.message.minLength",
            },
        },
    },
];