export type ContactsFormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
    consent: boolean;
};

export type ContactsFieldConfig = {
    name: keyof ContactsFormData;
    labelKey: string;
    type: "text" | "tel" | "email" | "textarea";
    placeholderKey: string;
    validation?: {
        required?: string;
        pattern?: { value: RegExp; message: string };
        minLength?: { value: number; message: string };
    };
};

export const contactsFormFields: ContactsFieldConfig[] = [
    {
        name: 'name',
        labelKey: 'ContactsSection.fields.name.label',
        type: 'text',
        placeholderKey: 'ContactsSection.fields.name.placeholder',
        validation: {
            required: "ContactsSection.errors.name.required",
            pattern: {
                value: /^[A-Za-zА-Яа-я\s]+$/,
                message: "ContactsSection.errors.name.pattern",
            },
        },
    },
    {
        name: 'phone',
        labelKey: 'ContactsSection.fields.phone.label',
        type: 'tel',
        placeholderKey: 'ContactsSection.fields.phone.placeholder',
        validation: {
            required: "ContactsSection.errors.phone.required",
            pattern: {
                value: /^[\d\s()+-]{7,20}$/,
                message: "ContactsSection.errors.phone.pattern",
            },
        },
    },
    {
        name: 'email',
        labelKey: 'ContactsSection.fields.email.label',
        type: 'email',
        placeholderKey: 'ContactsSection.fields.email.placeholder',
        validation: {
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "ContactsSection.errors.email.pattern",
            },
        },
    },
    {
        name: 'message',
        labelKey: 'ContactsSection.fields.message.label',
        type: 'textarea',
        placeholderKey: 'ContactsSection.fields.message.placeholder',
        validation: {
            required: "ContactsSection.errors.message.required",
            minLength: {
                value: 10,
                message: "ContactsSection.errors.message.minLength",
            },
        },
    },
];