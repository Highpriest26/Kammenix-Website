export interface ContactFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  serviceRequired: string;
  preferredContactMethod: 'Email' | 'Phone' | 'WhatsApp';
  projectLocation: string;
  message: string;
  consent: boolean;
  honeypot?: string; // Anti-spam field
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  propertyProjectType: string;
  projectLocation: string;
  expectedStartDate: string;
  estimatedBudget?: string;
  projectDescription: string;
  fileName?: string;
  consent: boolean;
  honeypot?: string; // Anti-spam field
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export class FormService {
  /**
   * Validates contact form inputs
   */
  static validateContactForm(data: ContactFormData): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(data.phone.replace(/\s+/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!data.serviceRequired) {
      errors.serviceRequired = 'Please select a service';
    }

    if (!data.projectLocation.trim()) {
      errors.projectLocation = 'Project location is required';
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long';
    }

    if (!data.consent) {
      errors.consent = 'You must agree to be contacted by Kammenix Nig. Limited';
    }

    return errors;
  }

  /**
   * Validates quote request form inputs
   */
  static validateQuoteForm(data: QuoteFormData): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!data.serviceRequired) {
      errors.serviceRequired = 'Please select a service';
    }

    if (!data.propertyProjectType.trim()) {
      errors.propertyProjectType = 'Property or project type is required';
    }

    if (!data.projectLocation.trim()) {
      errors.projectLocation = 'Project location is required';
    }

    if (!data.expectedStartDate) {
      errors.expectedStartDate = 'Expected start date is required';
    }

    if (!data.projectDescription.trim()) {
      errors.projectDescription = 'Project description is required';
    }

    if (!data.consent) {
      errors.consent = 'You must agree to be contacted by Kammenix Nig. Limited';
    }

    return errors;
  }

  /**
   * Submit Contact Form
   * Ready for Formspree / EmailJS / Custom Backend integration
   */
  static async submitContactForm(data: ContactFormData): Promise<FormSubmissionResult> {
    // Spam check
    if (data.honeypot) {
      return { success: false, message: 'Bot submission detected.' };
    }

    const errors = this.validateContactForm(data);
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'Please resolve the highlighted errors before submitting.',
        errors,
      };
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Here you can add fetch call to Formspree, EmailJS, or custom API route
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    */

    return {
      success: true,
      message: 'Thank you! Your enquiry has been received. A Kammenix representative will contact you shortly.',
    };
  }

  /**
   * Submit Quote Form
   */
  static async submitQuoteForm(data: QuoteFormData): Promise<FormSubmissionResult> {
    if (data.honeypot) {
      return { success: false, message: 'Bot submission detected.' };
    }

    const errors = this.validateQuoteForm(data);
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'Please resolve the highlighted errors before submitting.',
        errors,
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 1400));

    return {
      success: true,
      message: 'Thank you! Your quote request has been submitted. Our team will review your project details and respond within 24 hours.',
    };
  }
}
