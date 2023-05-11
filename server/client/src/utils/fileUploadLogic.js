const [uploadedFiles, setUploadedFiles] = useState([]);

  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];

    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((file) => file.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only upload ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });

    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = async (e) => {
    const chosenfiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenfiles);

    try {
      const res = await axios.post(
        "http://localhost:5000/upload",
        uploadedFiles
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };