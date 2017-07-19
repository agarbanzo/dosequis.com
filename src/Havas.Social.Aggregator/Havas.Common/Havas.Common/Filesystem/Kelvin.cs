using System;
using System.IO;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text;
using System.Web.Script.Serialization;
using System.Xml;
using System.Xml.Serialization;

namespace Havas.Common.Filesystem
{
    public enum SerializerType
    {
        XML,
        DataContract
    }

    public static class Kelvin<T> // where T : ISerializable // prevents string[] from being Serialized
    {
        #region To/From a File
        /// <summary>
        /// Serialize object to an XML file on disk
        /// </summary>
        /// <param name="cryo">T instance to serialize</param>
        /// <param name="fileName">Full file path, including name and extension, eg @"C:\Temp\NewFile.xml"</param>
        /// <returns>true if save was successful, false if an error occured</returns>
        public static bool ToXmlFile(T cryo, string fileName)
        {
            try
            {
                var serializerXml = new XmlSerializer(typeof(T));
                TextWriter writer = new StreamWriter(fileName);
                serializerXml.Serialize(writer, cryo);
                writer.Close();
                return true;
            }
            catch (DirectoryNotFoundException)
            {
                return false;
            }
        }
        /// <summary>
        /// Deserialize an Xml File to T object
        /// </summary>
        /// <param name="frozenObjectFileName">Full file path, including name and extension, eg @"C:\Temp\NewFile.xml"</param>
        /// <returns>T instance or default(T)</returns>
        public static T FromXmlFile(string frozenObjectFileName)
        {
            var serializerXml = new XmlSerializer(typeof(T));
            if (!File.Exists(frozenObjectFileName))
            {
                throw new FileNotFoundException(frozenObjectFileName + " was not found.");
            }
            Stream stream = new FileStream(frozenObjectFileName, FileMode.Open, FileAccess.Read);
            object o = serializerXml.Deserialize(stream);
            stream.Close();
            return (T)o;
        }

        /// <summary>
        /// this uses the dataContract serializer so the output
        /// type does not have to be the same as the type that 
        /// was serialized for T
        /// </summary>
        /// <param name="frozenObjectFileName"></param>
        /// <returns></returns>
        public static T FromDataContractXmlFile(string frozenObjectFileName)
        {
            var serializer = new DataContractSerializer(typeof(T));
            if (!File.Exists(frozenObjectFileName))
            {
                throw new FileNotFoundException(frozenObjectFileName + " was not found.");
            }
            Stream stream = new FileStream(frozenObjectFileName, FileMode.Open, FileAccess.Read);
            var reader = new XmlTextReader(stream);
            object @object;
            try
            {
                @object = serializer.ReadObject(reader);
            }
            finally
            {
                reader.Close();
            }
            stream.Close();
            return (T)@object;
        }

        #endregion

        #region To/From a String


        public static string ToXmlStringWithUTF8Encoding(T cryo)
        {
            string content;
            var memStrm = new MemoryStream();

            using (var writer = new XmlTextWriter(memStrm, new UTF8Encoding(false)))
            {
                var serializer = new XmlSerializer(typeof(T));
                serializer.Serialize(writer, cryo);
                var utf8EncodedData = memStrm.GetBuffer();
                content = Encoding.UTF8.GetString(utf8EncodedData, 0, (int)memStrm.Length);
            }

            return content;
        }

        /// <summary>
        /// Serialize object to an Xml String for use in your code
        /// </summary>
        /// <param name="cryo">T instance to serialize</param>
        /// <returns><see cref="System.String"/> representation of T object</returns>
        /// 
        public static string ToXmlString(T cryo)
        {
            return ToXmlString(cryo, SerializerType.XML);
        }

        public static string ToDataContractXmlString(T cryo)
        {
            return ToXmlString(cryo, SerializerType.DataContract);
        }

        public static string ToJsonString(T cryo)
        {
            return new JavaScriptSerializer().Serialize(cryo);
        }

        private static string ToXmlString(T cryo, SerializerType serializerType)
        {
            return serializerType == SerializerType.XML ? ToStringViaXml(cryo) : ToStringViaDataContract(cryo);
        }

        private static string ToStringViaDataContract(T cryo)
        {
            var serializer = new DataContractSerializer(typeof(T), null, Int32.MaxValue, true, false, null);

            var stringWriter = new StringWriter();
            var writer = new XmlTextWriter(stringWriter);

            try
            {
                serializer.WriteObject(writer, cryo);
            }
            finally
            {
                writer.Flush();
                writer.Close();
            }

            return stringWriter.ToString();
        }

        private static string ToStringViaXml(T cryo)
        {
            var serializer = new XmlSerializer(typeof(T));
            var writer = new StringWriter();
            try
            {
                serializer.Serialize(writer, cryo);
            }
            finally
            {
                writer.Flush();
                writer.Close();
            }

            return writer.ToString();
        }

        /// <summary>
        /// Deserialize a String containing Xml to T object
        /// </summary>
        /// <param name="frozen"></param>
        /// <returns>T instance or default(T)</returns>
        public static T FromXml(string frozen)
        {
            if (frozen.Length <= 0) throw new ArgumentOutOfRangeException("frozen", "Cannot thaw a zero-length string");

            var serializer = new XmlSerializer(typeof(T));
            var reader = new StringReader(frozen);
            object @object;
            try
            {
                @object = serializer.Deserialize(reader);
            }
            finally
            {
                reader.Close();
            }
            return (T)@object;
        }

        /// <summary>
        /// this uses the dataContract serializer so the output
        /// type does not have to be the same as the type that 
        /// was serialized for T
        /// </summary>
        /// <param name="frozen"></param>
        /// <returns></returns>
        public static T FromDataContractXml(string frozen)
        {
            if (frozen.Length <= 0) return default(T);

            var serializer = new DataContractSerializer(typeof(T));
            var reader = new XmlTextReader(new StringReader(frozen));
            object @object;

            try
            {
                @object = serializer.ReadObject(reader);
            }
            finally
            {
                reader.Close();
            }
            return (T)@object;
        }
        #endregion

        #region To/From Xml
        /// <summary>
        /// Serialize object to an XmlDocument for use in your code
        /// </summary>
        /// <param name="cryo">T instance to serialize</param>
        /// <returns><see cref="XmlDocument"/> representation of T object</returns>
        public static XmlDocument ToXmlDocument(T cryo)
        {
            var serializer = new XmlSerializer(typeof(T));
            var xml = new XmlDocument();
            using (Stream stream = new MemoryStream())
            {
                serializer.Serialize(stream, cryo);
                stream.Position = 0;
                xml.Load(stream);
            }
            return xml;
        }
        /// <summary>
        /// Deserialize an XmlDocument to T object
        /// </summary>
        /// <param name="frozen">XmlDocument to deserialize</param>
        /// <returns>T instance</returns>
        public static T FromXml(XmlDocument frozen)
        {
            var serializer = new XmlSerializer(typeof(T));
            var stream = new MemoryStream();
            frozen.Save(stream);
            try
            {
                stream.Position = 0;
                return (T)serializer.Deserialize(stream);
            }
            finally
            {
                stream.Close();
            }
        }
        #endregion

        #region To/From a binary File
        /// <summary>
        /// Serialize object to a Binary file on disk
        /// </summary>
        /// <param name="cryo">T instance to serialize</param>
        /// <param name="fileName">Full file path, including name and extension, eg @"C:\Temp\NewFile.dat"</param>
        /// <returns>true if save was successful, false if an error occured</returns>
        public static bool ToBinaryFile(T cryo, string fileName)
        {
            try
            {
                Stream stream = new FileStream(fileName, FileMode.Create);
                IFormatter formatter = new System.Runtime.Serialization.Formatters.Binary.BinaryFormatter();
                formatter.Serialize(stream, cryo);
                stream.Close();
                return true;
            }
            catch (DirectoryNotFoundException)
            {
                return false;
            }
        }
        /// <summary>
        /// Deserialize a Binary File to T object
        /// </summary>
        /// <param name="frozenObjectFileName">Full file path, including name and extension, eg @"C:\Temp\NewFile.xml"</param>
        /// <returns>T instance or default(T)</returns>
        public static T FromBinaryFile(string frozenObjectFileName)
        {
            if (!File.Exists(frozenObjectFileName))
            {
                throw new FileNotFoundException(frozenObjectFileName + " was not found.");
            }
            Stream stream = new FileStream(frozenObjectFileName, FileMode.Open);
            IFormatter formatter = new System.Runtime.Serialization.Formatters.Binary.BinaryFormatter();
            try
            {
                return (T)formatter.Deserialize(stream);
                // This doesn't work, SerializationException "Cannot find the assembly <random name>"
            }
            catch (SerializationException)
            {
                // "Unable to find assembly 'App_Code.vj-e_8q4, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null'."
                // or                       "App_Code.y4xkvcpq, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null."
                // and try the same operation with a custom Binder class that tries to resolve types locally.
                stream.Position = 0;
                formatter.Binder = new GenericBinder();
                return (T)formatter.Deserialize(stream);
                // // Try the custom GenericBinder to see if that helps us 'find' the assembly
            }
            finally
            {
                stream.Close();
            }
        }

        #endregion

        #region To/From a Byte[]
        /// <summary>
        /// Serialize object to a Byte[] array for use in your code
        /// </summary>
        /// <param name="cryo">T instance to serialize</param>
        /// <returns>Array of <see cref="System.Byte"/> representing T object</returns>
        public static Byte[] ToBinary(T cryo)
        {
            var formatter = new System.Runtime.Serialization.Formatters.Binary.BinaryFormatter();
            Stream stream = new MemoryStream();
            try
            {
                formatter.Serialize(stream, cryo);
                var bytes = new byte[stream.Length];
                stream.Seek(0, SeekOrigin.Begin);
                stream.Read(bytes, 0, bytes.Length);
                return bytes;
            }
            finally
            {
                stream.Close();
            }
        }
        /// <summary>
        /// Deserialize a Byte Array to T object
        /// </summary>
        /// <param name="frozen">Array of <see cref="System.Byte"/> containing a previously serialized object</param>
        /// <returns>T instance or null</returns>
        public static T FromBinary(Byte[] frozen)
        {
            if (frozen.Length <= 0) throw new ArgumentOutOfRangeException("frozen", "Cannot thaw a zero-length Byte[] array");

            var formatter = new System.Runtime.Serialization.Formatters.Binary.BinaryFormatter();
            Stream stream = new MemoryStream(frozen);
            try
            {
                return (T)formatter.Deserialize(stream);
            }
            finally
            {
                stream.Close();
            }
        }
        /// <summary>
        /// Deserialize a Byte Array to T object, using a custom Binder 
        /// to help resolve the types referred to in the serialized stream
        /// </summary>
        /// <param name="frozen">Array of <see cref="System.Byte"/> containing a previously serialized object</param>
        /// <param name="customBinder">Subclass of <see cref="System.Runtime.Serialization.SerializationBinder"/></param>
        /// <returns>T instance or null</returns>
        public static T FromBinary(Byte[] frozen, SerializationBinder customBinder)
        {
            if (frozen.Length <= 0) throw new ArgumentOutOfRangeException("frozen", "Cannot thaw a zero-length Byte[] array");
            if (customBinder == null) throw new ArgumentNullException("customBinder", "SerializationBinder implementation cannot be null");

            var formatter = new System.Runtime.Serialization.Formatters.Binary.BinaryFormatter { Binder = customBinder };
            Stream stream = new MemoryStream(frozen);
            try
            {
                return (T)formatter.Deserialize(stream);
            }
            finally
            {
                stream.Close();
            }
        }
        #endregion

        #region Private SerializationBinder helper classes
        /// <summary>
        /// Attempt to resolve type names by looking in the assembly where T is declared
        /// </summary>
        /// <remarks>
        /// http://msdn2.microsoft.com/en-us/library/system.runtime.serialization.formatters.binary.binaryformatter.binder.aspx
        /// http://msdn2.microsoft.com/en-us/library/system.runtime.serialization.serializationbinder.aspx
        /// </remarks>
        public class GenericBinder : SerializationBinder
        {
            /// <summary>
            /// Resolve type
            /// </summary>
            /// <param name="assemblyName">eg. App_Code.y4xkvcpq, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null</param>
            /// <param name="typeName">eg. String</param>
            /// <returns>Type for the deserializer to use</returns>
            public override Type BindToType(string assemblyName, string typeName)
            {
                // We're going to ignore the assembly name, and assume it's in the same assembly 
                // that <T> is defined (it's either T or a field/return type within T anyway)
                string[] typeInfo = typeName.Split('.');
                bool isSystem = (typeInfo[0] == "System");
                string className = typeInfo[typeInfo.Length - 1];

                // noop is the default, returns what was passed in
                Type toReturn = Type.GetType(string.Format("{0}, {1}", typeName, assemblyName));

                if (!isSystem && (toReturn == null))
                {   // don't bother if system, or if the GetType worked already (must be OK, surely?)
                    Assembly a = Assembly.GetAssembly(typeof(T));
                    if (a == null)
                    {
                        throw new ArgumentException("Assembly for type '" + typeof(T).Name + "' could not be loaded.");
                    }

                    string assembly = a.FullName.Split(',')[0];   //FullName example: "App_Code.y4xkvcpq, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
                    Type newtype = a.GetType(assembly + "." + className);
                    if (newtype == null)
                    {
                        throw new ArgumentException("Type '" + typeName + "' could not be loaded from assembly '" + assembly + "'.");
                    }
                    toReturn = newtype;
                }
                return toReturn;
            }
        }
        #endregion
    }
}