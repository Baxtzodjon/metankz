export type extraContactsFormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
    consent: boolean;
    interest: string; // NOT REQUIRED
    location: string;
    preferredContactMethod: "phone" | "email" | "whatsapp";
};

export type extraContactsFieldConfig = {
    name: keyof extraContactsFormData;
    labelKey: string;
    type: "text" | "tel" | "email" | "textarea" | "select" | "radio";
    placeholderKey?: string;
    options?: { label: string; value: string }[];
    validation?: {
        required?: string;
        pattern?: { value: RegExp; message: string };
        minLength?: { value: number; message: string };
    };
};

export const extraContactsFormFields = (): extraContactsFieldConfig[] => [
    {
        name: "name",
        labelKey: "ContactsSection.fields.name.label",
        type: "text",
        placeholderKey: "ContactsSection.fields.name.placeholder",
        validation: {
            required: "ContactsSection.errors.name.required",
            pattern: {
                value: /^[A-Za-zА-Яа-я\s]+$/,
                message: "ContactsSection.errors.name.pattern",
            },
        },
    },
    {
        name: "phone",
        labelKey: "ContactsSection.fields.phone.label",
        type: "tel",
        placeholderKey: "ContactsSection.fields.phone.placeholder",
        validation: {
            required: "ContactsSection.errors.phone.required",
            pattern: {
                value: /^[\d\s()+-]{7,20}$/,
                message: "ContactsSection.errors.phone.pattern",
            },
        },
    },
    {
        name: "email",
        labelKey: "ContactsSection.fields.email.label",
        type: "email",
        placeholderKey: "ContactsSection.fields.email.placeholder",
        validation: {
            // ❌ NOT REQUIRED
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "ContactsSection.errors.email.pattern",
            },
        },
    },
    {
        name: "message",
        labelKey: "ContactsSection.fields.message.label",
        type: "textarea",
        placeholderKey: "ContactsSection.fields.message.placeholder",
        validation: {
            required: "ContactsSection.errors.message.required",
            minLength: {
                value: 10,
                message: "ContactsSection.errors.message.minLength",
            },
        },
    },
    {
        name: "interest",
        labelKey: "ContactsSection.fields.interest.label",
        type: "select",
        placeholderKey: "ContactsSection.fields.interest.placeholder",
        options: [
            { label: "Metan Gas System", value: "metanGasSystem" },
            { label: "Cylinder Installation", value: "cylinderInstallation" },
            { label: "Gas Analyzer", value: "gasAnalyzer" },
            { label: "Technical Consultation", value: "technicalConsultation" },
            { label: "Partnership / B2B", value: "partnershipB2B" },
        ],
        validation: {
            // ❌ NOT REQUIRED
        },
    },
    {
        name: "location",
        labelKey: "ContactsSection.fields.location.label",
        type: "select",
        placeholderKey: "ContactsSection.fields.location.placeholder",
        options: [
            { label: "Uzbekistan", value: "uzbekistan" },
            { label: "Kazakhstan", value: "kazakhstan" },
            { label: "Europe", value: "europe" },
        ],
        validation: {
            required: "ContactsSection.errors.location.required",
        },
    },
    {
        name: "preferredContactMethod",
        labelKey: "ContactsSection.fields.preferredContactMethod.label",
        type: "radio",
        options: [
            { label: "Phone", value: "phone" },
            { label: "Email", value: "email" },
            { label: "WhatsApp", value: "whatsapp" },
        ],
        validation: {
            required: "ContactsSection.errors.preferredContactMethod.required",
        },
    },
    {
        name: "interest",
        labelKey: "ContactsSection.fields.interest.label",
        type: "select",
        placeholderKey: "ContactsSection.fields.interest.placeholder",
        options: [
            { label: "ContactsSection.options.interest.metanGasSystem", value: "metanGasSystem" },
            { label: "ContactsSection.options.interest.cylinderInstallation", value: "cylinderInstallation" },
            { label: "ContactsSection.options.interest.gasAnalyzer", value: "gasAnalyzer" },
            { label: "ContactsSection.options.interest.technicalConsultation", value: "technicalConsultation" },
            { label: "ContactsSection.options.interest.partnershipB2B", value: "partnershipB2B" },
        ],
        // interest NOT required
        validation: {},
    },
    {
        name: "location",
        labelKey: "ContactsSection.fields.location.label",
        type: "select",
        placeholderKey: "ContactsSection.fields.location.placeholder",
        options: [
            { label: "ContactsSection.options.location.uzbekistan", value: "uzbekistan" },
            { label: "ContactsSection.options.location.kazakhstan", value: "kazakhstan" },
            { label: "ContactsSection.options.location.europe", value: "europe" },
        ],
        validation: {
            required: "ContactsSection.errors.location.required",
        },
    },
    {
        name: "preferredContactMethod",
        labelKey: "ContactsSection.fields.preferredContactMethod.label",
        type: "radio",
        options: [
            { label: "ContactsSection.options.preferredContactMethod.phone", value: "phone" },
            { label: "ContactsSection.options.preferredContactMethod.email", value: "email" },
            { label: "ContactsSection.options.preferredContactMethod.whatsapp", value: "whatsapp" },
        ],
        validation: {
            required: "ContactsSection.errors.preferredContactMethod.required",
        },
    },
];
