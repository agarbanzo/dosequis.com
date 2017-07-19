using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace Havas.Common.Web.MVC.DataAnnotations
{
    public class EmailAttribute : RegularExpressionAttribute, IClientValidatable
    {
        public EmailAttribute() : base(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$") { }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRegexRule(ErrorMessageString, Pattern);
        }
    }

    public class ZipCodeAttribute : RegularExpressionAttribute, IClientValidatable
    {
        public ZipCodeAttribute() : base(@"^\d{5}(-\d{4})?$") { }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRegexRule(ErrorMessageString, Pattern);
        }
    }

    public class PhoneAreaCodeAttribute : RegularExpressionAttribute, IClientValidatable
    {
        public PhoneAreaCodeAttribute() : base(@"^\d{3}$") { }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRegexRule(ErrorMessageString, Pattern);
        }
    }

    public class PhonePrefixAttribute : PhoneAreaCodeAttribute, IClientValidatable
    {
        public new IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRegexRule(ErrorMessageString, Pattern);
        }
    }

    public class PhoneSubscriberAttribute : RegularExpressionAttribute, IClientValidatable
    {
        public PhoneSubscriberAttribute() : base(@"^\d{4}$") { }
        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRegexRule(ErrorMessageString, Pattern);
        }
    }

    public class PasswordAttribute : RegularExpressionAttribute, IClientValidatable
    {
        public PasswordAttribute() : base(@"^\S{6,}$") { }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRegexRule(ErrorMessageString, Pattern);
        }

    }

    public class MustBeTrueAttribute : ValidationAttribute  // , IClientValidatable
    {
        public override bool IsValid(object value)
        {
            return value != null && value is bool && (bool)value;
        }

        //public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        //{
        //    yield return new ModelClientValidationEqualToRule(ErrorMessageString, true);
        //}
    }
}