window.DL_SECTION_DATA = {
  "decks": [
    {
      "chapter": "1",
      "deckId": "1.1",
      "deck": "Introduction to Deep Learning",
      "file": "1.1. Introduction to deep learning.pdf",
      "slideCount": 1
    },
    {
      "chapter": "1",
      "deckId": "1.2",
      "deck": "Basic Neural Network",
      "file": "1.2 Basic Neural Network.pdf",
      "slideCount": 1
    },
    {
      "chapter": "1",
      "deckId": "1.3",
      "deck": "Shallow Neural Networks",
      "file": "1.3 Shallow Neural Networks.pdf",
      "slideCount": 1
    },
    {
      "chapter": "1",
      "deckId": "1.4",
      "deck": "Deep Neural Networks",
      "file": "1.4 Deep Neural Networks.pdf",
      "slideCount": 1
    },
    {
      "chapter": "2",
      "deckId": "2.1",
      "deck": "Practical Aspects of Deep Learning",
      "file": "2.1 Practical Aspects of Deep Learning.pdf",
      "slideCount": 1
    },
    {
      "chapter": "2",
      "deckId": "2.2",
      "deck": "Optimization Algorithms",
      "file": "2.2 Optimization Algorithms.pdf",
      "slideCount": 1
    },
    {
      "chapter": "2",
      "deckId": "2.3",
      "deck": "Hyper parameter tuning",
      "file": "2.3 Hyper parameter tuning.pdf",
      "slideCount": 1
    },
    {
      "chapter": "3",
      "deckId": "3.1",
      "deck": "Introduction to ML strategy",
      "file": "3.1 Introduction to ML strategy.pdf",
      "slideCount": 1
    },
    {
      "chapter": "3",
      "deckId": "3.2",
      "deck": "Error Analysis",
      "file": "3.2 Error Analysis.pdf",
      "slideCount": 1
    },
    {
      "chapter": "4",
      "deckId": "4.1",
      "deck": "Convolutional Neural Networks",
      "file": "4.1 Convolutional Neural Networks.pdf",
      "slideCount": 1
    },
    {
      "chapter": "4",
      "deckId": "4.2",
      "deck": "Case Studies",
      "file": "4.2 Case Studies.pdf",
      "slideCount": 1
    },
    {
      "chapter": "4",
      "deckId": "4.3",
      "deck": "Object Detection",
      "file": "4.3 Object Detection.pdf",
      "slideCount": 1
    },
    {
      "chapter": "4",
      "deckId": "4.4",
      "deck": "Face recognition",
      "file": "4.4 Face recognition.pdf",
      "slideCount": 1
    },
    {
      "chapter": "5",
      "deckId": "5.1",
      "deck": "Recurrent Neural Networks",
      "file": "5.1 Recurrent Neural Networks.pdf",
      "slideCount": 1
    },
    {
      "chapter": "5",
      "deckId": "5.2",
      "deck": "NLP and Word Embeddings",
      "file": "5.2 NLP and Word Embeddings.pdf",
      "slideCount": 1
    },
    {
      "chapter": "5",
      "deckId": "5.3",
      "deck": "Sequence Models & Attention Mechanism",
      "file": "5.3 Sequence Models & Attention Mechanism.pdf",
      "slideCount": 1
    },
    {
      "chapter": "5",
      "deckId": "5.4",
      "deck": "Transformer Network",
      "file": "5.4 Transformer Network.pdf",
      "slideCount": 1
    }
  ],
  "sections": [
    {
      "id": "section-1-1",
      "course": "Deep Learning",
      "chapter": "1",
      "deckId": "1.1",
      "deck": "Introduction to Deep Learning",
      "sourcePdf": "1.1. Introduction to deep learning.pdf",
      "title": "Introduction to Deep Learning",
      "keywords": [
        "Deep Learning",
        "supervised learning",
        "CNN",
        "RNN",
        "structured data",
        "unstructured data",
        "ReLU"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu Deep Learning là gì, vì sao phát triển mạnh, khi nào nên dùng neural network, và cách chọn kiến trúc cho từng dạng dữ liệu."
        },
        {
          "label": "Ý chính",
          "value": "Deep Learning học biểu diễn nhiều tầng từ dữ liệu. Hiệu quả tăng mạnh khi có nhiều dữ liệu, tính toán mạnh và thuật toán tốt hơn."
        },
        {
          "label": "Dữ liệu",
          "value": "Structured data là dữ liệu dạng bảng có feature rõ ràng; unstructured data gồm ảnh, âm thanh, văn bản dù cuối cùng vẫn được lưu bằng số."
        },
        {
          "label": "Mô hình",
          "value": "Standard NN cho dữ liệu bảng, CNN cho ảnh/lưới không gian, RNN hoặc sequence model cho chuỗi, custom/hybrid model cho dữ liệu phức hợp."
        },
        {
          "label": "Cần nhớ",
          "value": "Trong thực tế, DL là quá trình lặp Idea -> Code -> Experiment; hiếm khi mô hình tốt ngay từ lần đầu."
        }
      ],
      "theory": "Deep Learning là nhánh của machine learning dùng neural network nhiều tầng để học ánh xạ từ đầu vào x sang đầu ra y. Điểm mạnh của nó là khả năng tự học representation: lớp đầu học đặc trưng đơn giản, lớp sâu hơn học đặc trưng trừu tượng hơn. Trong supervised learning, ta có tập ví dụ (x, y), mô hình dự đoán y_hat, rồi dùng sai số giữa y_hat và y để cập nhật tham số. Với dữ liệu bảng như thông tin người dùng hoặc giá nhà, standard neural network thường đủ tốt. Với ảnh, CNN phù hợp vì tận dụng cấu trúc không gian và filter cục bộ. Với văn bản, âm thanh, machine translation hoặc dữ liệu theo thời gian, RNN/sequence model phù hợp vì cần xử lý thứ tự và ngữ cảnh. Deep Learning phát triển mạnh nhờ ba lực đẩy: dữ liệu lớn hơn, phần cứng/tính toán nhanh hơn, và thuật toán tốt hơn như ReLU, initialization, optimization. Khi dữ liệu tăng, mô hình lớn thường tiếp tục cải thiện trong khi nhiều thuật toán truyền thống sớm bão hòa. Vì vậy, xây dựng hệ DL tốt là một vòng lặp thực nghiệm: nghĩ ý tưởng, viết code, chạy thí nghiệm, phân tích lỗi, rồi lặp lại.",
      "formulas": [
        {
          "expression": "a = max(0, z)",
          "explanation": "ReLU giữ phần dương của z và đưa phần âm về 0. ReLU giúp train mạng sâu nhanh hơn sigmoid trong nhiều trường hợp vì giảm vanishing gradient ở miền dương."
        },
        {
          "expression": "x -> model -> y_hat",
          "explanation": "Đây là khuôn supervised learning: dữ liệu đầu vào đi qua mô hình để tạo dự đoán. Training dùng y thật để đo lỗi và cập nhật tham số."
        },
        {
          "expression": "Idea -> Code -> Experiment -> Error Analysis -> Idea",
          "explanation": "Đây là vòng lặp thực nghiệm cốt lõi của Deep Learning. Tốc độ lặp càng nhanh thì khả năng tìm mô hình tốt càng cao."
        }
      ],
      "diagram": {
        "nodes": [
          "Dữ liệu",
          "Mô hình phù hợp",
          "Dự đoán",
          "Đánh giá và lặp"
        ],
        "description": "Luồng học: nhận diện kiểu dữ liệu, chọn kiến trúc phù hợp, train mô hình để tạo dự đoán, rồi dùng kết quả thí nghiệm để cải thiện."
      },
      "example": "Ví dụ: bài toán dự đoán người dùng có click quảng cáo hay không là supervised learning với structured data, thường dùng standard NN hoặc logistic model. Bài toán nhận diện mèo trong ảnh dùng CNN vì đặc trưng cạnh, texture và hình dạng nằm trong không gian ảnh. Bài toán dịch Anh sang Pháp dùng sequence model vì đầu vào và đầu ra đều là chuỗi từ có thứ tự.",
      "questions": [
        "What does the \"AI is the new electricity\" analogy mean?",
        "Why has Deep Learning recently taken off?",
        "Which statements about iterating ML ideas are true, noting dataset size impact?",
        "Can experienced DL engineers usually get good models on first try without iteration?",
        "Describe or sketch the ReLU activation function.",
        "Are cat images structured data because they are computer arrays?",
        "Is a demographic dataset unstructured due to varied sources?",
        "Why are RNNs used for machine translation like English to French?",
        "In the ML performance vs. data diagram, what are the x and y axes?",
        "Based on performance vs. data trends, which statements are true?"
      ],
      "answers": [
        {
          "question": "What does the \"AI is the new electricity\" analogy mean?",
          "answer": "Ý nghĩa là AI, đặc biệt là Deep Learning, đang trở thành công nghệ nền có thể biến đổi nhiều ngành giống như điện từng làm với công nghiệp, giao thông, y tế và đời sống. Nó không chỉ là một sản phẩm riêng lẻ mà là năng lực chung giúp tự động hóa, dự đoán và tối ưu nhiều hệ thống."
        },
        {
          "question": "Why has Deep Learning recently taken off?",
          "answer": "Ít nhất hai lý do chính là dữ liệu lớn hơn và năng lực tính toán mạnh hơn. Ngoài ra còn có thuật toán tốt hơn như ReLU, initialization, optimization và thư viện GPU giúp thử nghiệm nhanh. Khi có nhiều dữ liệu, mạng sâu thường tiếp tục cải thiện hiệu năng tốt hơn các mô hình nhỏ."
        },
        {
          "question": "Which statements about iterating ML ideas are true, noting dataset size impact?",
          "answer": "Các phát biểu đúng là: xây dựng DL tốt cần lặp nhiều vòng Idea -> Code -> Experiment; tốc độ thử nghiệm rất quan trọng; dữ liệu lớn thường giúp mô hình lớn phát huy lợi thế. Không nên kỳ vọng chọn đúng kiến trúc và hyperparameter ngay lần đầu."
        },
        {
          "question": "Can experienced DL engineers usually get good models on first try without iteration?",
          "answer": "False. Kỹ sư có kinh nghiệm có trực giác tốt hơn, nhưng vẫn cần lặp thí nghiệm vì kết quả phụ thuộc dữ liệu, metric, phân phối lỗi, kiến trúc và hyperparameter. DL là quá trình empirical."
        },
        {
          "question": "Describe or sketch the ReLU activation function.",
          "answer": "ReLU được định nghĩa là a = max(0, z). Nếu z < 0 thì output bằng 0; nếu z >= 0 thì output bằng z. Đồ thị là đường nằm ngang tại 0 ở nửa âm và đường thẳng dốc 1 ở nửa dương."
        },
        {
          "question": "Are cat images structured data because they are computer arrays?",
          "answer": "False. Dù ảnh được lưu thành mảng pixel, ảnh vẫn được xem là unstructured data vì feature có ý nghĩa không nằm sẵn trong từng cột bảng. Mô hình phải tự học cạnh, texture, bộ phận và hình dạng từ pixel."
        },
        {
          "question": "Is a demographic dataset unstructured due to varied sources?",
          "answer": "False nếu dữ liệu đã được tổ chức thành bảng feature như tuổi, giới tính, thu nhập, vị trí. Nguồn dữ liệu đa dạng không quyết định structured hay unstructured; cấu trúc biểu diễn dùng cho mô hình mới là điểm quan trọng."
        },
        {
          "question": "Why are RNNs used for machine translation like English to French?",
          "answer": "Vì machine translation là bài toán sequence-to-sequence: câu đầu vào là chuỗi từ và câu đầu ra cũng là chuỗi từ. Thứ tự từ và ngữ cảnh trước/sau ảnh hưởng nghĩa, nên cần mô hình xử lý dependency theo chuỗi như RNN, LSTM, GRU hoặc attention/Transformer."
        },
        {
          "question": "In the ML performance vs. data diagram, what are the x and y axes?",
          "answer": "Trục x là lượng dữ liệu hoặc training set size. Trục y là performance của thuật toán, ví dụ accuracy cao hơn hoặc error thấp hơn tùy cách vẽ. Ý chính: khi dữ liệu tăng, mô hình đủ lớn có thể tiếp tục cải thiện."
        },
        {
          "question": "Based on performance vs. data trends, which statements are true?",
          "answer": "Đúng: mô hình lớn thường cần nhiều dữ liệu để vượt mô hình nhỏ; dữ liệu nhiều hơn không tự đảm bảo tốt nếu model quá nhỏ hoặc optimization kém; scale của data, computation và algorithm cùng quyết định tiến bộ DL."
        }
      ]
    },
    {
      "id": "section-1-2",
      "course": "Deep Learning",
      "chapter": "1",
      "deckId": "1.2",
      "deck": "Basic Neural Network",
      "sourcePdf": "1.2 Basic Neural Network.pdf",
      "title": "Basic Neural Network",
      "keywords": [
        "binary classification",
        "logistic regression",
        "loss",
        "gradient descent",
        "vectorization",
        "broadcasting"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Nắm logistic regression như một neural network rất đơn giản, hiểu loss/cost, gradient descent, computation graph, vectorization và broadcasting."
        },
        {
          "label": "Bài toán mẫu",
          "value": "Binary classification: ví dụ ảnh là cat hay non-cat, nhãn y thuộc {0, 1}."
        },
        {
          "label": "Công thức lõi",
          "value": "z = w^T x + b, a = sigmoid(z), L(a,y) = -[y log a + (1-y) log(1-a)], J là trung bình loss."
        },
        {
          "label": "Tối ưu",
          "value": "Gradient descent cập nhật w := w - alpha dw và b := b - alpha db."
        },
        {
          "label": "Hiệu năng",
          "value": "Vectorization gom m ví dụ thành ma trận để tránh vòng lặp Python và tận dụng thư viện tính toán nhanh."
        }
      ],
      "theory": "Phần này xây nền cho neural network bằng logistic regression. Với một ví dụ x, mô hình tính z = w^T x + b, sau đó dùng sigmoid để tạo a = y_hat, tức xác suất y = 1. Vì bài toán là binary classification, loss cần phạt mạnh khi mô hình tự tin sai; logistic loss làm điều này bằng log. Cost J là trung bình loss trên m ví dụ. Để học w và b, ta tính đạo hàm dw, db bằng chain rule qua computation graph, rồi dùng gradient descent để cập nhật tham số theo hướng giảm J. Khi có nhiều ví dụ, cách làm hiệu quả là vectorization: đặt X có shape (n_x, m), mỗi cột là một ví dụ, rồi tính Z = w^T X + b và A = sigmoid(Z) cùng lúc. Broadcasting trong NumPy giúp cộng bias hoặc vector có shape nhỏ hơn vào ma trận lớn theo quy tắc tự mở rộng chiều tương thích. Trọng tâm của phần này là tư duy shape: luôn kiểm tra kích thước của x, X, w, b, Z, A, dZ, dw, db để code đúng và nhanh.",
      "formulas": [
        {
          "expression": "z = w^T x + b",
          "explanation": "Tổ hợp tuyến tính của input. w có cùng số chiều với x, b là bias."
        },
        {
          "expression": "a = sigmoid(z) = 1 / (1 + e^(-z))",
          "explanation": "Biến z thành xác suất trong khoảng 0 đến 1 cho phân loại nhị phân."
        },
        {
          "expression": "L(a, y) = -[y log(a) + (1-y) log(1-a)]",
          "explanation": "Logistic loss cho một ví dụ; phạt nặng khi dự đoán xác suất sai."
        },
        {
          "expression": "J(w,b) = (1/m) sum_i L(a^(i), y^(i))",
          "explanation": "Cost function là trung bình loss trên toàn bộ training set."
        },
        {
          "expression": "w := w - alpha dw, b := b - alpha db",
          "explanation": "Gradient descent cập nhật tham số với learning rate alpha."
        },
        {
          "expression": "X.shape = (n_x, m)",
          "explanation": "Ma trận dữ liệu vectorized: mỗi cột là một training example."
        }
      ],
      "diagram": {
        "nodes": [
          "X, Y",
          "Forward: Z, A",
          "Loss/Cost J",
          "Backward: dW, db"
        ],
        "description": "Một vòng train gồm forward propagation để dự đoán, tính loss/cost, backward propagation để lấy gradient, rồi cập nhật tham số."
      },
      "example": "Ảnh 32x32 RGB có shape (32, 32, 3). Khi đưa vào logistic regression, ta reshape ảnh thành vector cột x có shape (3072, 1). Với m ảnh, X có shape (3072, m). Mô hình tính A = sigmoid(w^T X + b), rồi so với Y để tính cost và gradient.",
      "questions": [
        "What does a neuron compute, considering a = g(Wx + b)?",
        "What is the formula for Logistic Loss?",
        "How do you reshape a (32,32,3) image array img into a column vector x?",
        "If a.shape=(2,3) and b.shape=(2,1), what is c = a + b shape?",
        "If a.shape=(4,3) and b.shape=(3,2), what is c = a * b?",
        "If there are n_x input features and m examples, what is X dimension?",
        "If a.shape=(12288,150) and b.shape=(150,45), what is np.dot(a,b) shape?",
        "How do you vectorize c[i][j] = a[i][j] + b[j] for a.shape=(3,4), b.shape=(3,1)?",
        "If a.shape=(3,3) and b.shape=(3,1), what is c = a * b after broadcasting?",
        "Given J = u + v - w, u=a*b, v=a*c, w=b+c, simplify J and calculate derivatives."
      ],
      "answers": [
        {
          "question": "What does a neuron compute, considering a = g(Wx + b)?",
          "answer": "Neuron tính z = W x + b rồi áp dụng activation g để tạo a = g(z). Phần tuyến tính W x + b gom thông tin đầu vào có trọng số; activation tạo phi tuyến hoặc biến output thành xác suất."
        },
        {
          "question": "What is the formula for Logistic Loss?",
          "answer": "L(a,y) = -[y log(a) + (1-y) log(1-a)]. Nếu y=1, loss = -log(a), nên a càng gần 1 càng tốt. Nếu y=0, loss = -log(1-a), nên a càng gần 0 càng tốt."
        },
        {
          "question": "How do you reshape a (32,32,3) image array img into a column vector x?",
          "answer": "Số phần tử là 32*32*3 = 3072. Trong NumPy dùng x = img.reshape((32*32*3, 1)) hoặc x = img.reshape((3072, 1)). Kết quả là vector cột shape (3072, 1)."
        },
        {
          "question": "If a.shape=(2,3) and b.shape=(2,1), what is c = a + b shape?",
          "answer": "c có shape (2,3). b được broadcast theo chiều cột: mỗi hàng của b được cộng vào toàn bộ 3 phần tử tương ứng trong hàng của a."
        },
        {
          "question": "If a.shape=(4,3) and b.shape=(3,2), what is c = a * b?",
          "answer": "Phép nhân element-wise lỗi vì hai shape (4,3) và (3,2) không tương thích broadcasting: chiều cuối 3 và 2 khác nhau, chiều trước 4 và 3 cũng khác nhau."
        },
        {
          "question": "If there are n_x input features and m examples, what is X dimension?",
          "answer": "X có shape (n_x, m). Mỗi cột X[:, i] là một training example, còn mỗi hàng là một feature trên toàn bộ m ví dụ."
        },
        {
          "question": "If a.shape=(12288,150) and b.shape=(150,45), what is np.dot(a,b) shape?",
          "answer": "Kết quả có shape (12288,45), vì chiều trong 150 khớp nhau và np.dot lấy chiều ngoài là 12288 và 45."
        },
        {
          "question": "How do you vectorize c[i][j] = a[i][j] + b[j] for a.shape=(3,4), b.shape=(3,1)?",
          "answer": "Công thức nêu b[j] không khớp nếu b có shape (3,1) và j chạy theo 4 cột. Nếu ý là cộng theo hàng, dùng c = a + b, b sẽ broadcast thành (3,4). Nếu muốn cộng theo cột, b nên có shape (1,4)."
        },
        {
          "question": "If a.shape=(3,3) and b.shape=(3,1), what is c = a * b after broadcasting?",
          "answer": "b được broadcast thành (3,3), mỗi hàng của a nhân với giá trị b tương ứng của hàng đó. Nếu b = [[b1],[b2],[b3]], thì hàng 1 nhân b1, hàng 2 nhân b2, hàng 3 nhân b3."
        },
        {
          "question": "Given J = u + v - w, u=a*b, v=a*c, w=b+c, simplify J and calculate derivatives.",
          "answer": "Thay u, v, w vào: J = ab + ac - (b+c) = ab + ac - b - c. Đạo hàm: dJ/da = b + c; dJ/db = a - 1; dJ/dc = a - 1. Nếu cần theo computation graph, gradient từ J truyền ngược qua u, v, w rồi cộng đóng góp tại a, b, c."
        }
      ]
    },
    {
      "id": "section-1-3",
      "course": "Deep Learning",
      "chapter": "1",
      "deckId": "1.3",
      "deck": "Shallow Neural Networks",
      "sourcePdf": "1.3 Shallow Neural Networks.pdf",
      "title": "Shallow Neural Networks",
      "keywords": [
        "one hidden layer",
        "activation functions",
        "tanh",
        "ReLU",
        "backpropagation",
        "random initialization"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Mở rộng logistic regression thành neural network một hidden layer, hiểu forward/backward vectorized, activation và initialization."
        },
        {
          "label": "Kiến trúc",
          "value": "Input layer a[0]=X, hidden layer tính Z[1], A[1], output layer tính Z[2], A[2]."
        },
        {
          "label": "Vì sao cần phi tuyến",
          "value": "Nếu không có activation phi tuyến, nhiều layer tuyến tính vẫn chỉ tương đương một hàm tuyến tính."
        },
        {
          "label": "Activation",
          "value": "tanh thường tốt hơn sigmoid ở hidden layer vì center dữ liệu quanh 0; ReLU phổ biến vì đơn giản và giảm vanishing gradient."
        },
        {
          "label": "Initialization",
          "value": "Không khởi tạo toàn bộ W bằng 0 vì các neuron sẽ học giống nhau; dùng random nhỏ để break symmetry."
        }
      ],
      "theory": "Shallow neural network trong phần này là mạng có một hidden layer. Với m ví dụ, forward propagation được vector hóa bằng Z[1] = W[1]X + b[1], A[1] = g[1](Z[1]), Z[2] = W[2]A[1] + b[2], A[2] = g[2](Z[2]). Hidden layer cho phép mô hình học đặc trưng trung gian thay vì chỉ học trực tiếp từ input sang output như logistic regression. Activation phi tuyến là bắt buộc: nếu dùng toàn tuyến tính, nhiều layer gộp lại vẫn là một phép tuyến tính, không tăng sức biểu diễn. Với hidden units, tanh thường tốt hơn sigmoid vì output nằm quanh 0; ReLU thường được dùng nhiều trong mạng sâu vì tính toán đơn giản và gradient tốt ở miền dương. Backpropagation tính dZ, dW, db cho từng layer bằng chain rule để cập nhật W và b. Shape là yếu tố quan trọng: nếu layer l có n[l] units và layer trước có n[l-1] units, W[l] có shape (n[l], n[l-1]), b[l] có shape (n[l], 1). Khởi tạo W bằng 0 làm các hidden units đối xứng, tính giống nhau và học giống nhau; vì vậy W cần random nhỏ, còn b có thể bằng 0.",
      "formulas": [
        {
          "expression": "Z[1] = W[1]X + b[1], A[1] = g[1](Z[1])",
          "explanation": "Forward propagation cho hidden layer."
        },
        {
          "expression": "Z[2] = W[2]A[1] + b[2], A[2] = sigmoid(Z[2])",
          "explanation": "Forward propagation cho output layer phân loại nhị phân."
        },
        {
          "expression": "dZ[2] = A[2] - Y",
          "explanation": "Gradient tại output layer với sigmoid + logistic loss."
        },
        {
          "expression": "dW[l] = (1/m) dZ[l] A[l-1]^T, db[l] = (1/m) sum(dZ[l])",
          "explanation": "Gradient vectorized cho tham số layer l."
        },
        {
          "expression": "W[l].shape = (n[l], n[l-1]), b[l].shape = (n[l], 1)",
          "explanation": "Quy tắc shape cơ bản để kiểm tra implementation."
        }
      ],
      "diagram": {
        "nodes": [
          "X = A[0]",
          "Hidden: Z[1], A[1]",
          "Output: Z[2], A[2]",
          "Backprop cập nhật W,b"
        ],
        "description": "Mạng một hidden layer học đặc trưng ở A[1], dùng A[2] để dự đoán, rồi truyền gradient ngược để cập nhật hai bộ tham số."
      },
      "example": "Với mạng 3-2-1: input có 3 feature, hidden layer có 2 units, output có 1 unit. W[1] shape (2,3), b[1] shape (2,1), W[2] shape (1,2), b[2] shape (1,1). Nếu có m ví dụ, Z[1] và A[1] có shape (2,m).",
      "questions": [
        "Does tanh usually outperform sigmoid for hidden units by better centering data?",
        "What is the correct vectorized implementation of forward propagation for layer l?",
        "What is the correct vectorized implementation of backward propagation for layer l?",
        "For binary and ternary classifiers, which output activations are best and why?",
        "If A.shape=(4,3), what is B.shape for B=np.sum(A,axis=1,keepdims=True), and why use keepdims?",
        "If weights and biases are initialized to zero, what happens to neuron computations?",
        "Should logistic regression weights be initialized randomly to break symmetry?",
        "What happens if tanh network weights are initialized very large?",
        "For a 1-hidden layer NN 3-2-1, what are shapes of b[1], W[1], W[2], b[2]?",
        "For the same network, what are dimensions of Z[1] and A[1] with m examples?"
      ],
      "answers": [
        {
          "question": "Does tanh usually outperform sigmoid for hidden units by better centering data?",
          "answer": "True. tanh có output trong khoảng (-1,1), trung tâm gần 0 nên activation của hidden layer thường cân bằng hơn sigmoid, vốn nằm trong (0,1). Điều này giúp gradient descent dễ tối ưu hơn trong nhiều trường hợp."
        },
        {
          "question": "What is the correct vectorized implementation of forward propagation for layer l?",
          "answer": "Công thức là Z[l] = W[l] A[l-1] + b[l], A[l] = g[l](Z[l]). Với m ví dụ, A[l-1] có shape (n[l-1], m), W[l] có shape (n[l], n[l-1]), b[l] broadcast thành (n[l], m)."
        },
        {
          "question": "What is the correct vectorized implementation of backward propagation for layer l?",
          "answer": "Các công thức lõi: dW[l] = (1/m) dZ[l] A[l-1]^T, db[l] = (1/m) np.sum(dZ[l], axis=1, keepdims=True), dA[l-1] = W[l]^T dZ[l]. Với hidden layer, dZ[l] = dA[l] * g'[l](Z[l])."
        },
        {
          "question": "For binary and ternary classifiers, which output activations are best and why?",
          "answer": "Binary classifier thường dùng sigmoid vì cần xác suất một lớp y=1. Ternary hoặc multi-class single-label classifier dùng softmax vì cần phân phối xác suất trên nhiều lớp với tổng bằng 1."
        },
        {
          "question": "If A.shape=(4,3), what is B.shape for B=np.sum(A,axis=1,keepdims=True), and why use keepdims?",
          "answer": "B có shape (4,1). keepdims=True giữ lại chiều đã sum để shape tương thích với b hoặc db, tránh lỗi broadcasting và giúp công thức vectorized nhất quán."
        },
        {
          "question": "If weights and biases are initialized to zero, what happens to neuron computations?",
          "answer": "Trong hidden layer, các neuron bắt đầu giống hệt nhau, nhận cùng gradient và tiếp tục học giống nhau. Mạng mất lợi ích của nhiều hidden units vì không break symmetry."
        },
        {
          "question": "Should logistic regression weights be initialized randomly to break symmetry?",
          "answer": "Không cần. Logistic regression không có nhiều hidden units đối xứng trong cùng layer, nên khởi tạo w=0 vẫn có thể học được. Random initialization chủ yếu cần cho neural network có hidden units."
        },
        {
          "question": "What happens if tanh network weights are initialized very large?",
          "answer": "Z có độ lớn lớn, tanh bị bão hòa gần -1 hoặc 1, đạo hàm tanh gần 0. Gradient rất nhỏ làm learning chậm hoặc gần như dừng, đây là vanishing gradient do activation saturation."
        },
        {
          "question": "For a 1-hidden layer NN 3-2-1, what are shapes of b[1], W[1], W[2], b[2]?",
          "answer": "n[0]=3, n[1]=2, n[2]=1. Vì vậy W[1] shape (2,3), b[1] shape (2,1), W[2] shape (1,2), b[2] shape (1,1)."
        },
        {
          "question": "For the same network, what are dimensions of Z[1] and A[1] with m examples?",
          "answer": "Z[1] và A[1] đều có shape (2,m), vì hidden layer có 2 units và ta xử lý m ví dụ cùng lúc theo cột."
        }
      ]
    },
    {
      "id": "section-1-4",
      "course": "Deep Learning",
      "chapter": "1",
      "deckId": "1.4",
      "deck": "Deep Neural Networks",
      "sourcePdf": "1.4 Deep Neural Networks.pdf",
      "title": "Deep Neural Networks",
      "keywords": [
        "deep neural network",
        "forward propagation",
        "backward propagation",
        "cache",
        "parameters",
        "hyperparameters",
        "representation"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Tổng quát hóa mạng một hidden layer thành mạng L-layer, hiểu notation, shape, forward/backward propagation, cache và hyperparameter."
        },
        {
          "label": "Deep network",
          "value": "Mạng sâu có nhiều hidden layers. L là số layer có tham số, không tính input layer."
        },
        {
          "label": "Representation",
          "value": "Layer sâu hơn thường học đặc trưng phức tạp hơn: từ cạnh, texture đến bộ phận và đối tượng."
        },
        {
          "label": "Cache",
          "value": "Cache lưu A[l-1], W[l], b[l], Z[l] trong forward để backward tính gradient đúng và nhanh."
        },
        {
          "label": "Thực nghiệm",
          "value": "Applied DL là empirical process: chọn layer, hidden units, learning rate, activation và regularization bằng thí nghiệm."
        }
      ],
      "theory": "Deep neural network là neural network có nhiều layer có tham số. Ta ký hiệu L là số layer, n[l] là số units ở layer l, A[0] = X và A[L] là output. Forward propagation ở mỗi layer dùng Z[l] = W[l]A[l-1] + b[l], A[l] = g[l](Z[l]). Trong implementation, mỗi layer thường có một hàm forward trả về A[l] và cache. Cache rất quan trọng vì backward propagation cần lại A[l-1], W[l], b[l], Z[l] để tính dW[l], db[l], dA[l-1]. Deep network mạnh vì học representation phân cấp: layer đầu có thể học đặc trưng đơn giản, layer giữa học pattern, layer sâu học khái niệm phức tạp. Về mặt tính toán, cần kiểm tra shape ở mọi layer: W[l] là (n[l], n[l-1]), b[l] là (n[l],1), Z[l] và A[l] là (n[l],m). Parameters là W và b được học từ dữ liệu. Hyperparameters như learning rate, số layer, số hidden units, activation, số iteration được đặt trước và điều chỉnh qua dev set. Vectorization loại bỏ vòng lặp qua examples, nhưng vẫn thường còn vòng lặp qua layers vì mỗi layer phụ thuộc output của layer trước.",
      "formulas": [
        {
          "expression": "Z[l] = W[l]A[l-1] + b[l]",
          "explanation": "Linear forward của layer l."
        },
        {
          "expression": "A[l] = g[l](Z[l])",
          "explanation": "Activation của layer l; hidden layer thường dùng ReLU/tanh, output tùy bài toán."
        },
        {
          "expression": "W[l].shape = (n[l], n[l-1]), b[l].shape = (n[l], 1)",
          "explanation": "Quy tắc shape cho tham số layer l."
        },
        {
          "expression": "dW[l] = (1/m)dZ[l]A[l-1]^T, db[l] = (1/m)sum(dZ[l])",
          "explanation": "Gradient tham số trong backward propagation."
        },
        {
          "expression": "parameters = {W[l], b[l]}, hyperparameters = {L, n[l], alpha, iterations}",
          "explanation": "Parameters được học; hyperparameters do người thiết kế chọn."
        }
      ],
      "diagram": {
        "nodes": [
          "A[0]=X",
          "Layer 1..L forward + cache",
          "A[L]=Y_hat",
          "Backward dùng cache"
        ],
        "description": "Forward đi từ input tới dự đoán và lưu cache; backward đi ngược từ loss để tính gradient cho từng layer."
      },
      "example": "Mạng có một input layer, hai hidden layers và một output layer thì L=3 vì có 3 layer có tham số. Nếu n[0]=12288, n[1]=20, n[2]=7, n[3]=1, thì W[1]=(20,12288), W[2]=(7,20), W[3]=(1,7).",
      "questions": [
        "What is the cache used for in forward and backward propagation?",
        "Which are parameters and which are hyperparameters?",
        "True or False: deeper layers typically compute more complex features.",
        "True or False: vectorization eliminates the layer loop in forward propagation.",
        "For a network with one input, two hidden, and one output layer, how many total layers L and hidden layers are there?",
        "True or False: backpropagation needs the activation function used in the corresponding forward propagation step.",
        "True or False: deep networks can compute some functions with exponentially smaller circuits than shallow networks.",
        "For a 2 hidden layer neural network, which shapes are correct?"
      ],
      "answers": [
        {
          "question": "What is the cache used for in forward and backward propagation?",
          "answer": "Cache lưu các giá trị trung gian của forward propagation như A[l-1], W[l], b[l], Z[l]. Backward propagation cần chúng để tính dZ[l], dW[l], db[l] và dA[l-1]. Không có cache, ta phải tính lại hoặc không đủ thông tin để lấy gradient đúng."
        },
        {
          "question": "Which are parameters and which are hyperparameters?",
          "answer": "Parameters là W[l] và b[l], được học bằng gradient descent. Hyperparameters là learning rate alpha, số layer L, số units n[l], số iterations, activation choice, mini-batch size, regularization strength; chúng được chọn trước hoặc tune trên dev set."
        },
        {
          "question": "True or False: deeper layers typically compute more complex features.",
          "answer": "True. Trong nhiều mô hình, layer đầu học cạnh hoặc pattern đơn giản, layer giữa học bộ phận, layer sâu học đối tượng hoặc khái niệm trừu tượng hơn. Đây là representation phân cấp."
        },
        {
          "question": "True or False: vectorization eliminates the layer loop in forward propagation.",
          "answer": "False. Vectorization loại bỏ vòng lặp qua training examples bằng ma trận, nhưng thường vẫn cần vòng lặp qua layers vì A[l] phụ thuộc A[l-1]."
        },
        {
          "question": "For a network with one input, two hidden, and one output layer, how many total layers L and hidden layers are there?",
          "answer": "Có 2 hidden layers. Theo convention của khóa học, L đếm các layer có tham số và không tính input layer, nên L=3: hidden layer 1, hidden layer 2 và output layer."
        },
        {
          "question": "True or False: backpropagation needs the activation function used in the corresponding forward propagation step.",
          "answer": "True. Backprop cần đạo hàm của activation g'[l](Z[l]) để tính dZ[l] = dA[l] * g'[l](Z[l]). Vì vậy phải biết layer đó dùng sigmoid, tanh, ReLU hay activation khác."
        },
        {
          "question": "True or False: deep networks can compute some functions with exponentially smaller circuits than shallow networks.",
          "answer": "True. Một số hàm có thể biểu diễn hiệu quả hơn rất nhiều bằng kiến trúc sâu do tái sử dụng và kết hợp đặc trưng theo tầng; mạng nông có thể cần số units tăng theo cấp số nhân để biểu diễn cùng cấu trúc."
        },
        {
          "question": "For a 2 hidden layer neural network, which shapes are correct?",
          "answer": "Nếu mạng có n[0] input features, n[1] units ở hidden layer 1, n[2] units ở hidden layer 2, n[3] output units và m examples, thì W[1]=(n[1],n[0]), b[1]=(n[1],1), W[2]=(n[2],n[1]), b[2]=(n[2],1), W[3]=(n[3],n[2]), b[3]=(n[3],1). A[1]=(n[1],m), A[2]=(n[2],m), A[3]=(n[3],m)."
        }
      ]
    },
    {
      "id": "section-2-1",
      "course": "Deep Learning",
      "chapter": "2",
      "deckId": "2.1",
      "deck": "Practical Aspects of Deep Learning",
      "sourcePdf": "2.1 Practical Aspects of Deep Learning.pdf",
      "title": "Practical Aspects of Deep Learning",
      "keywords": [
        "train/dev/test",
        "bias",
        "variance",
        "regularization",
        "dropout",
        "normalization",
        "gradient checking"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Biết cách thiết lập một dự án Deep Learning thực tế: chia dữ liệu, chẩn đoán bias/variance, dùng regularization, chuẩn hóa input và kiểm tra gradient."
        },
        {
          "label": "Dữ liệu",
          "value": "Train set dùng để học tham số, dev set dùng để chọn mô hình/hyperparameters, test set dùng để đánh giá cuối cùng. Dev và test nên cùng phân phối."
        },
        {
          "label": "Chẩn đoán lỗi",
          "value": "High bias là underfitting; high variance là overfitting. So sánh train/dev/test error để quyết định nên tăng model, thêm regularization hay thêm dữ liệu."
        },
        {
          "label": "Regularization",
          "value": "L2, dropout, data augmentation và early stopping giúp giảm overfitting bằng cách hạn chế mô hình học quá sát training set."
        },
        {
          "label": "Kiểm tra",
          "value": "Gradient checking dùng finite differences để so sánh gradient số và gradient backprop, chỉ dùng để debug, không dùng trong training."
        }
      ],
      "theory": "Phần này tập trung vào những quyết định thực tế khi xây dựng hệ Deep Learning. Đầu tiên cần chia dữ liệu thành train/dev/test sao cho dev và test phản ánh đúng phân phối mục tiêu. Với dữ liệu rất lớn, tỷ lệ dev/test có thể nhỏ hơn cách chia truyền thống vì chỉ cần đủ mẫu để đánh giá đáng tin cậy. Sau đó dùng train error và dev error để chẩn đoán bias/variance: train error cao thường là high bias, dev error cao hơn train error nhiều thường là high variance. Recipe cơ bản là xử lý bias trước bằng model lớn hơn, train lâu hơn hoặc tối ưu tốt hơn; sau đó xử lý variance bằng thêm dữ liệu, regularization hoặc data augmentation. L2 regularization thêm penalty vào cost để giữ trọng số nhỏ, dropout ngẫu nhiên tắt neuron khi train để giảm co-adaptation, còn early stopping dừng sớm khi dev error bắt đầu xấu đi. Chuẩn hóa input về zero mean và unit variance giúp cost surface tròn hơn, gradient descent hội tụ ổn định hơn. Với mạng sâu, cần chú ý vanishing/exploding gradients và dùng initialization phù hợp như Xavier/He initialization. Cuối cùng, gradient checking là công cụ debug quan trọng: so sánh gradient analytic từ backprop với gradient numerical từ finite differences để phát hiện bug implementation.",
      "formulas": [
        {
          "expression": "J_regularized = J + lambda/(2m) sum(W[l]^2)",
          "explanation": "L2 regularization thêm penalty cho trọng số lớn, giúp giảm overfitting."
        },
        {
          "expression": "X_norm = (X - mu) / sigma",
          "explanation": "Chuẩn hóa input bằng cách trừ mean và chia standard deviation."
        },
        {
          "expression": "dtheta_approx = (J(theta + epsilon) - J(theta - epsilon)) / (2 epsilon)",
          "explanation": "Finite difference dùng để kiểm tra gradient bằng xấp xỉ số."
        },
        {
          "expression": "difference = norm(grad - gradapprox) / (norm(grad) + norm(gradapprox))",
          "explanation": "Nếu difference rất nhỏ, backprop implementation có khả năng đúng."
        }
      ],
      "diagram": {
        "nodes": [
          "Chia train/dev/test",
          "Chẩn đoán bias/variance",
          "Regularize/normalize",
          "Gradient check"
        ],
        "description": "Luồng thực hành: thiết lập dữ liệu đúng, đọc lỗi để chọn hướng cải thiện, ổn định optimization, rồi kiểm tra gradient khi nghi ngờ bug."
      },
      "example": "Nếu train error thấp nhưng dev error cao, mô hình đang high variance. Các hướng tốt là thêm dữ liệu, tăng regularization, dùng dropout hoặc data augmentation. Nếu cả train và dev error đều cao, vấn đề chính là high bias; nên thử model lớn hơn, train lâu hơn hoặc optimizer tốt hơn.",
      "questions": [
        "If you have 10,000,000 examples, how would you split the train/dev/test set?",
        "What criteria should the dev and test sets meet?",
        "If your Neural Network model seems to have high variance, which would be promising things to try?",
        "Why set dev and test sets to come from the same distribution?",
        "Your dev set error is much higher than training set error. What does this imply?",
        "What is data augmentation?",
        "Why avoid using test set data to make development decisions?",
        "What is early stopping?",
        "What is orthogonalization?"
      ],
      "answers": [
        {
          "question": "If you have 10,000,000 examples, how would you split the train/dev/test set?",
          "answer": "Với dữ liệu rất lớn, không cần 20-30% cho dev/test. Có thể dùng khoảng 98% train, 1% dev, 1% test hoặc thậm chí nhỏ hơn nếu dev/test vẫn đủ lớn để đánh giá ổn định."
        },
        {
          "question": "What criteria should the dev and test sets meet?",
          "answer": "Dev và test nên cùng phân phối, phản ánh dữ liệu mục tiêu khi triển khai, đủ lớn để so sánh mô hình đáng tin cậy và không bị dùng để train."
        },
        {
          "question": "If your Neural Network model seems to have high variance, which would be promising things to try?",
          "answer": "Thêm dữ liệu, dùng L2 regularization, dropout, data augmentation, giảm độ phức tạp mô hình hoặc điều chỉnh hyperparameters. Mục tiêu là giảm khoảng cách giữa train error và dev error."
        },
        {
          "question": "Why set dev and test sets to come from the same distribution?",
          "answer": "Dev set dùng để chọn mô hình, test set dùng để đánh giá cuối. Nếu hai set khác phân phối, mô hình tối ưu trên dev có thể không phản ánh hiệu năng test, làm quyết định phát triển sai hướng."
        },
        {
          "question": "Your dev set error is much higher than training set error. What does this imply?",
          "answer": "Đây là dấu hiệu high variance hoặc overfitting: mô hình học tốt training set nhưng tổng quát hóa kém sang dev set."
        },
        {
          "question": "What is data augmentation?",
          "answer": "Data augmentation tạo thêm biến thể hợp lệ từ dữ liệu hiện có, ví dụ lật/crop/đổi sáng ảnh, thêm nhiễu âm thanh. Nó giúp mô hình học đặc trưng bền vững hơn và giảm overfitting."
        },
        {
          "question": "Why avoid using test set data to make development decisions?",
          "answer": "Nếu dùng test set để chọn mô hình hoặc hyperparameters, test set không còn là đánh giá khách quan. Kết quả test sẽ lạc quan giả và không phản ánh khả năng tổng quát hóa thật."
        },
        {
          "question": "What is early stopping?",
          "answer": "Early stopping dừng training khi dev error bắt đầu tăng dù train error còn giảm. Nó hoạt động như regularization nhưng cũng làm lẫn hai mục tiêu optimization và regularization."
        },
        {
          "question": "What is orthogonalization?",
          "answer": "Orthogonalization là nguyên tắc tách các vấn đề thành nút điều khiển riêng: giảm bias, giảm variance, sửa metric, sửa distribution. Mỗi hành động nên tác động chủ yếu lên một vấn đề để dễ debug."
        }
      ]
    },
    {
      "id": "section-2-2",
      "course": "Deep Learning",
      "chapter": "2",
      "deckId": "2.2",
      "deck": "Optimization Algorithms",
      "sourcePdf": "2.2 Optimization Algorithms.pdf",
      "title": "Optimization Algorithms",
      "keywords": [
        "mini-batch",
        "EWMA",
        "momentum",
        "RMSprop",
        "Adam",
        "learning rate decay",
        "plateau"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu các thuật toán tối ưu giúp train neural network nhanh và ổn định hơn: mini-batch, EWMA, momentum, RMSprop, Adam và learning rate decay."
        },
        {
          "label": "Mini-batch",
          "value": "Chia training set thành các batch nhỏ để cập nhật tham số thường xuyên hơn batch gradient descent nhưng ít nhiễu hơn stochastic gradient descent."
        },
        {
          "label": "Momentum",
          "value": "Dùng trung bình trượt của gradient để giảm dao động và tăng tốc theo hướng nhất quán."
        },
        {
          "label": "RMSprop",
          "value": "Theo dõi bình phương gradient để tự điều chỉnh learning rate theo từng tham số."
        },
        {
          "label": "Adam",
          "value": "Kết hợp momentum và RMSprop, thường là lựa chọn mặc định mạnh cho nhiều bài toán."
        }
      ],
      "theory": "Optimization Algorithms tập trung vào cách cập nhật tham số hiệu quả. Batch gradient descent dùng toàn bộ training set cho mỗi update nên ổn định nhưng chậm. Stochastic gradient descent dùng một ví dụ nên rất nhiễu. Mini-batch gradient descent là điểm cân bằng: mỗi update dùng một nhóm ví dụ, tận dụng vectorization và cập nhật thường xuyên. Exponentially weighted average (EWMA) làm mượt chuỗi nhiễu bằng cách giữ nhiều trọng số hơn cho giá trị gần đây; beta càng lớn thì đường càng mượt nhưng phản ứng chậm hơn. Momentum áp dụng EWMA cho gradient, giúp giảm zig-zag và tăng tốc hướng chính. RMSprop dùng EWMA của bình phương gradient để chia nhỏ update ở chiều có gradient lớn và giữ update tốt hơn ở chiều có gradient nhỏ. Adam kết hợp cả hai: v là momentum, s là RMSprop, kèm bias correction ở giai đoạn đầu. Learning rate decay giảm alpha theo thời gian: đầu training đi nhanh, cuối training cập nhật tinh hơn. Trong high-dimensional neural networks, local optima xấu ít đáng sợ hơn plateau và saddle points; momentum/RMSprop/Adam giúp vượt vùng phẳng tốt hơn.",
      "formulas": [
        {
          "expression": "v_dW = beta v_dW + (1 - beta) dW",
          "explanation": "EWMA/momentum cho gradient dW."
        },
        {
          "expression": "s_dW = beta2 s_dW + (1 - beta2) dW^2",
          "explanation": "RMSprop theo dõi trung bình trượt của bình phương gradient."
        },
        {
          "expression": "W := W - alpha v_dW / sqrt(s_dW + epsilon)",
          "explanation": "Adam/RMSprop style update: chia update theo độ lớn gradient bình phương."
        },
        {
          "expression": "alpha = alpha0 / (1 + decay_rate * epoch)",
          "explanation": "Learning rate decay giảm alpha khi số epoch tăng."
        }
      ],
      "diagram": {
        "nodes": [
          "Mini-batch",
          "Momentum",
          "RMSprop",
          "Adam"
        ],
        "description": "Các thuật toán tối ưu xây dần từ cập nhật mini-batch, làm mượt hướng đi, chuẩn hóa độ lớn update, rồi kết hợp thành Adam."
      },
      "example": "Nếu batch gradient descent quá chậm trên tập dữ liệu lớn, hãy chuyển sang mini-batch. Nếu cost dao động mạnh theo một chiều, momentum giúp làm mượt. Nếu gradient mỗi tham số có thang đo rất khác nhau, RMSprop hoặc Adam thường ổn định hơn.",
      "questions": [
        "Statement about mini-batch gradient descent?",
        "Why mini-batch size not 1 or m?",
        "How does the cost function plot differ between mini-batch and batch gradient descent?",
        "β=0.9 EWMA. What is the effect of changing β?",
        "Which techniques help if batch GD is too slow?",
        "What is Adam?"
      ],
      "answers": [
        {
          "question": "Statement about mini-batch gradient descent?",
          "answer": "Mini-batch gradient descent dùng một phần training set cho mỗi update. Nó nhanh hơn batch gradient descent trên dữ liệu lớn và ít nhiễu hơn stochastic gradient descent."
        },
        {
          "question": "Why mini-batch size not 1 or m?",
          "answer": "Size 1 quá nhiễu và khó tận dụng vectorization; size m trở thành batch gradient descent, mỗi update rất chậm. Mini-batch trung gian tận dụng tính toán ma trận và cập nhật đủ thường xuyên."
        },
        {
          "question": "How does the cost function plot differ between mini-batch and batch gradient descent?",
          "answer": "Batch gradient descent thường giảm cost mượt hơn. Mini-batch gradient descent giảm theo xu hướng nhưng dao động vì mỗi batch có phân phối hơi khác nhau."
        },
        {
          "question": "β=0.9 EWMA. What is the effect of changing β?",
          "answer": "Beta lớn hơn làm đường trung bình mượt hơn nhưng phản ứng chậm hơn và có thể lệch về sau. Beta nhỏ hơn phản ứng nhanh hơn nhưng dao động nhiều hơn."
        },
        {
          "question": "Which techniques help if batch GD is too slow?",
          "answer": "Mini-batch gradient descent, momentum, RMSprop, Adam, learning rate tuning và learning rate decay đều có thể giúp train nhanh hơn hoặc ổn định hơn."
        },
        {
          "question": "What is Adam?",
          "answer": "Adam là optimizer kết hợp momentum và RMSprop. Nó dùng trung bình trượt của gradient và bình phương gradient, có bias correction, rồi cập nhật tham số bằng adaptive learning rate."
        }
      ]
    },
    {
      "id": "section-2-3",
      "course": "Deep Learning",
      "chapter": "2",
      "deckId": "2.3",
      "deck": "Hyper parameter tuning",
      "sourcePdf": "2.3 Hyper parameter tuning.pdf",
      "title": "Hyperparameter Tuning, Batch Norm, Softmax and Frameworks",
      "keywords": [
        "hyperparameter tuning",
        "random search",
        "Batch Normalization",
        "softmax",
        "TensorFlow",
        "log scale"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Biết cách tune hyperparameters hiệu quả, hiểu Batch Norm, Softmax cho multi-class classification và vai trò của deep learning frameworks."
        },
        {
          "label": "Tuning",
          "value": "Random search thường tốt hơn grid search vì không phải hyperparameter nào cũng quan trọng như nhau."
        },
        {
          "label": "Scale",
          "value": "Learning rate, beta và regularization nên sample trên log scale thay vì linear scale."
        },
        {
          "label": "Batch Norm",
          "value": "Chuẩn hóa activation hoặc pre-activation trong layer để ổn định training, rồi học lại scale gamma và shift beta."
        },
        {
          "label": "Softmax",
          "value": "Softmax tạo phân phối xác suất cho bài toán phân loại nhiều lớp loại trừ nhau."
        }
      ],
      "theory": "Hyperparameter tuning là quá trình tìm cấu hình tốt cho learning rate, số layer, số hidden units, mini-batch size, regularization, beta của momentum/Adam và nhiều lựa chọn khác. Random search thường hiệu quả hơn grid search trong không gian nhiều chiều vì chỉ một vài hyperparameters có ảnh hưởng lớn. Với learning rate hoặc regularization, nên sample theo log scale để bao phủ nhiều bậc độ lớn. Chiến lược Panda nghĩa là chăm một mô hình, điều chỉnh cẩn thận khi tài nguyên ít; Caviar nghĩa là chạy nhiều thử nghiệm song song khi có tài nguyên. Batch Normalization chuẩn hóa z trong layer bằng mean/variance của mini-batch, sau đó dùng gamma và beta để học lại scale/shift phù hợp. Nó giúp training nhanh hơn, giảm internal covariate shift và có chút hiệu ứng regularization. Với multi-class classification, softmax biến logits thành xác suất nhiều lớp và dùng cross-entropy loss. Deep learning frameworks như TensorFlow/PyTorch giúp tự động tính gradient, quản lý tensor, optimizer, initializer và triển khai mô hình nhanh hơn.",
      "formulas": [
        {
          "expression": "z_norm = (z - mu) / sqrt(sigma^2 + epsilon)",
          "explanation": "Batch Norm chuẩn hóa z bằng mean và variance của mini-batch."
        },
        {
          "expression": "z_tilde = gamma z_norm + beta",
          "explanation": "Gamma và beta cho phép layer học lại scale và shift sau normalization."
        },
        {
          "expression": "a_i = exp(z_i) / sum_j exp(z_j)",
          "explanation": "Softmax biến logits thành xác suất cho từng class."
        },
        {
          "expression": "r = -4 * random, alpha = 10^r",
          "explanation": "Ví dụ sample learning rate trên log scale từ 10^-4 đến 1."
        }
      ],
      "diagram": {
        "nodes": [
          "Random search",
          "Log scale",
          "Batch Norm",
          "Softmax/framework"
        ],
        "description": "Phần này đi từ cách tìm hyperparameters, ổn định training bằng Batch Norm, đến output multi-class và công cụ framework."
      },
      "example": "Để sample beta trong khoảng [0.9, 0.99] theo log space, có thể sample u đều trong khoảng log10(1-0.99) đến log10(1-0.9), đặt 1 - beta = 10^u, rồi beta = 1 - 10^u.",
      "questions": [
        "How is Batch Norm applied at test time?",
        "Name three key features provided by modern deep learning frameworks.",
        "Why is random search often better than grid search for high-dimensional hyperparameter tuning?",
        "Are all hyperparameters equally important to tune?",
        "What does the choice between Panda and Caviar search strategies depend on?",
        "How do you sample β in [0.9,0.99] uniformly in log space?",
        "Why shouldn't you tune hyperparameters only once at the start?",
        "What exactly is normalized in the lth layer during Batch Norm?",
        "Why is ε added in the Batch Norm formula?",
        "What is the role of γ and β in Batch Normalization?"
      ],
      "answers": [
        {
          "question": "How is Batch Norm applied at test time?",
          "answer": "Không dùng mean/variance của mini-batch test nhỏ. Ta dùng moving average của mean và variance đã ước lượng trong training để normalize ổn định."
        },
        {
          "question": "Name three key features provided by modern deep learning frameworks.",
          "answer": "Automatic differentiation, tensor operations/GPU acceleration, built-in optimizers/losses/initializers, model serialization và deployment tools."
        },
        {
          "question": "Why is random search often better than grid search for high-dimensional hyperparameter tuning?",
          "answer": "Vì chỉ một số chiều thật sự quan trọng. Random search thử nhiều giá trị khác nhau trên mỗi hyperparameter quan trọng hơn grid search cố định lưới đều."
        },
        {
          "question": "Are all hyperparameters equally important to tune?",
          "answer": "Không. Learning rate thường rất quan trọng; beta, layer size, regularization tùy bài toán. Vì vậy nên ưu tiên tài nguyên cho hyperparameters nhạy nhất."
        },
        {
          "question": "What does the choice between Panda and Caviar search strategies depend on?",
          "answer": "Phụ thuộc tài nguyên tính toán. Nếu chỉ train được ít mô hình, dùng Panda: chăm một mô hình và điều chỉnh kỹ. Nếu có nhiều máy, dùng Caviar: chạy nhiều thử nghiệm song song."
        },
        {
          "question": "How do you sample β in [0.9,0.99] uniformly in log space?",
          "answer": "Sample 1 - beta trên log scale: lấy u đều trong [log10(0.01), log10(0.1)], đặt 1 - beta = 10^u, rồi beta = 1 - 10^u."
        },
        {
          "question": "Why shouldn't you tune hyperparameters only once at the start?",
          "answer": "Dữ liệu, model, code và tài nguyên thay đổi theo thời gian. Hyperparameters tốt lúc đầu có thể không còn tốt sau khi pipeline thay đổi."
        },
        {
          "question": "What exactly is normalized in the lth layer during Batch Norm?",
          "answer": "Thường normalize z[l], tức pre-activation của layer l, theo mean và variance của mini-batch."
        },
        {
          "question": "Why is ε added in the Batch Norm formula?",
          "answer": "Epsilon tránh chia cho 0 và tăng ổn định số học khi variance rất nhỏ."
        },
        {
          "question": "What is the role of γ and β in Batch Normalization?",
          "answer": "Gamma học scale, beta học shift. Chúng giúp mô hình không bị ép activation luôn có mean 0 variance 1 nếu điều đó không tối ưu."
        }
      ]
    },
    {
      "id": "section-3-1",
      "course": "Deep Learning",
      "chapter": "3",
      "deckId": "3.1",
      "deck": "Introduction to ML strategy",
      "sourcePdf": "3.1 Introduction to ML strategy.pdf",
      "title": "Introduction to ML Strategy",
      "keywords": [
        "ML strategy",
        "orthogonalization",
        "single-number metric",
        "dev/test distribution",
        "human-level performance",
        "avoidable bias"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Biết cách ra quyết định cải thiện mô hình bằng metric, dev/test set, human-level performance và phân tích bias/variance."
        },
        {
          "label": "Orthogonalization",
          "value": "Tách vấn đề thành các nút điều khiển độc lập: fit training set, fit dev set, fit test set, fit real-world objective."
        },
        {
          "label": "Metric",
          "value": "Single-number metric giúp so sánh mô hình nhanh. Có thể dùng optimizing metric và satisficing metrics."
        },
        {
          "label": "Distribution",
          "value": "Dev/test nên cùng phân phối với dữ liệu mục tiêu để định hướng đúng."
        },
        {
          "label": "Human-level",
          "value": "Human-level error là proxy cho Bayes error, giúp phân biệt avoidable bias và variance."
        }
      ],
      "theory": "ML strategy giúp chọn việc nên làm tiếp theo thay vì thử ngẫu nhiên. Orthogonalization khuyên tách hệ thống thành các mục tiêu riêng: nếu train error cao, tập trung giảm bias; nếu dev error cao hơn train error, tập trung giảm variance; nếu test khác dev, xem lại overfitting dev set; nếu metric tốt nhưng user không hài lòng, đổi metric/dev-test distribution. Single-number evaluation metric giúp team ra quyết định nhanh hơn nhiều metric rời rạc. Khi có nhiều tiêu chí, chọn một optimizing metric và đặt các tiêu chí khác thành satisficing constraints, ví dụ maximize accuracy với runtime dưới 100ms. Dev và test set phải đến từ cùng phân phối mục tiêu. Human-level performance giúp ước lượng Bayes error: train error cao hơn human-level nhiều là avoidable bias; dev error cao hơn train error nhiều là variance. Khi model vượt human-level, việc cải thiện trở nên khó hơn vì khó biết Bayes error và lỗi còn lại thường tinh vi hơn.",
      "formulas": [
        {
          "expression": "avoidable_bias = train_error - human_level_error",
          "explanation": "Khoảng cách từ train error đến human-level/Bayes proxy thể hiện bias còn có thể tránh."
        },
        {
          "expression": "variance = dev_error - train_error",
          "explanation": "Khoảng cách dev-train thể hiện mức overfitting/variance."
        },
        {
          "expression": "test_gap = test_error - dev_error",
          "explanation": "Nếu test gap lớn, có thể dev set đã bị overfit hoặc test distribution khác dev."
        }
      ],
      "diagram": {
        "nodes": [
          "Metric đúng",
          "Dev/test đúng",
          "Bias/variance",
          "Hành động ưu tiên"
        ],
        "description": "ML strategy biến các con số lỗi thành quyết định có thứ tự: sửa mục tiêu, sửa dữ liệu, giảm bias hoặc giảm variance."
      },
      "example": "Nếu human-level error 0.1%, train error 2%, dev error 2.1%, vấn đề chính là avoidable bias vì train error còn xa human-level. Nên thử model lớn hơn, train lâu hơn, optimizer tốt hơn hoặc architecture search trước khi tập trung thêm dữ liệu.",
      "questions": [
        "Does having three evaluation metrics slow down algorithm choice and team iteration?",
        "Which model would you choose: 98% accuracy, 9s runtime, 9MB memory?",
        "Is accuracy optimizing and runtime/memory satisficing metrics?",
        "Should you avoid adding citizens' data to training if it differs from dev/test data?",
        "Why object to adding citizens' data to the test set?",
        "Does 4% train error and 4.5% dev error suggest training a bigger network?",
        "Define human-level performance as a proxy for Bayes error.",
        "Can learning algorithm performance exceed human-level but not Bayes error?",
        "Given 0.1% human-level, 2% train error, 2.1% dev error, what are promising options?",
        "Given 0.1% human-level, 2% train, 2.1% dev, 7% test error, what conclusions?",
        "With 0.1% human-level, 0.05% train/dev error, what conclusions?",
        "If client prefers fewer false negatives, what should you do?",
        "If performance degrades due to a new bird species, what action should be taken?",
        "Agree with statements about training a cat detector with a large dataset and long training time?"
      ],
      "answers": [
        {
          "question": "Does having three evaluation metrics slow down algorithm choice and team iteration?",
          "answer": "Có. Nhiều metric ngang hàng làm khó chọn mô hình. Nên gom thành một metric chính hoặc dùng optimizing/satisficing metrics."
        },
        {
          "question": "Which model would you choose: 98% accuracy, 9s runtime, 9MB memory?",
          "answer": "Nếu runtime và memory đều dưới ngưỡng chấp nhận, chọn model có accuracy cao nhất. Nếu 9s vượt constraint, model này bị loại dù accuracy tốt."
        },
        {
          "question": "Is accuracy optimizing and runtime/memory satisficing metrics?",
          "answer": "Đúng nếu mục tiêu là maximize accuracy với điều kiện runtime và memory không vượt ngưỡng."
        },
        {
          "question": "Should you avoid adding citizens' data to training if it differs from dev/test data?",
          "answer": "Không nhất thiết. Có thể thêm vào train nếu giúp học representation, nhưng dev/test vẫn phải phản ánh phân phối mục tiêu."
        },
        {
          "question": "Why object to adding citizens' data to the test set?",
          "answer": "Test set phải phản ánh dữ liệu mục tiêu. Nếu thêm dữ liệu khác phân phối, kết quả đánh giá cuối sẽ không còn đo đúng bài toán triển khai."
        },
        {
          "question": "Does 4% train error and 4.5% dev error suggest training a bigger network?",
          "answer": "Chưa chắc. Nếu human-level error thấp hơn nhiều, train error 4% cho thấy bias; model lớn hơn có thể hữu ích. Nếu human-level gần 4%, vấn đề bias không lớn."
        },
        {
          "question": "Define human-level performance as a proxy for Bayes error.",
          "answer": "Human-level error thường được dùng làm upper bound gần đúng cho Bayes error vì con người rất giỏi ở nhiều tác vụ nhận thức."
        },
        {
          "question": "Can learning algorithm performance exceed human-level but not Bayes error?",
          "answer": "Có. Human-level không phải Bayes error tuyệt đối. Mô hình có thể vượt con người nhưng vẫn chưa đạt lỗi tối ưu lý thuyết."
        },
        {
          "question": "Given 0.1% human-level, 2% train error, 2.1% dev error, what are promising options?",
          "answer": "Tập trung giảm avoidable bias: train model lớn hơn, train lâu hơn, dùng optimizer/architecture tốt hơn hoặc tuning mạnh hơn."
        },
        {
          "question": "Given 0.1% human-level, 2% train, 2.1% dev, 7% test error, what conclusions?",
          "answer": "Có avoidable bias lớn và test gap lớn. Cần vừa giảm bias vừa xem lại dev/test distribution hoặc khả năng overfit dev set."
        },
        {
          "question": "With 0.1% human-level, 0.05% train/dev error, what conclusions?",
          "answer": "Mô hình vượt human-level trên train/dev. Có thể Bayes error thấp hơn human-level hoặc metric/dữ liệu cần xem lại; cải thiện tiếp sẽ khó hơn."
        },
        {
          "question": "If client prefers fewer false negatives, what should you do?",
          "answer": "Đổi metric hoặc thêm false negative rate làm satisficing/optimizing criterion phù hợp với nhu cầu client."
        },
        {
          "question": "If performance degrades due to a new bird species, what action should be taken?",
          "answer": "Cập nhật dev/test set và training data để phản ánh loài mới; sau đó phân tích lỗi và retrain/tune model."
        },
        {
          "question": "Agree with statements about training a cat detector with a large dataset and long training time?",
          "answer": "Nên ưu tiên vòng lặp nhanh. Nếu training quá lâu, cần dùng subset, baseline nhanh hoặc hạ cấu hình để phân tích hướng đi trước khi train lớn."
        }
      ]
    },
    {
      "id": "section-3-2",
      "course": "Deep Learning",
      "chapter": "3",
      "deckId": "3.2",
      "deck": "Error Analysis",
      "sourcePdf": "3.2 Error Analysis.pdf",
      "title": "Error Analysis",
      "keywords": [
        "error analysis",
        "mislabeled data",
        "data mismatch",
        "transfer learning",
        "multi-task learning",
        "end-to-end learning"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Biết cách phân tích lỗi, xử lý nhãn sai, mismatch dữ liệu, transfer learning, multi-task learning và end-to-end learning."
        },
        {
          "label": "Error analysis",
          "value": "Xem thủ công các lỗi trên dev set để ước lượng nhóm lỗi nào đáng ưu tiên sửa."
        },
        {
          "label": "Mislabeled data",
          "value": "Chỉ sửa nhãn nếu lỗi nhãn ảnh hưởng đáng kể; sửa dev/test nhất quán để đánh giá công bằng."
        },
        {
          "label": "Data mismatch",
          "value": "Khi train distribution khác dev/test, cần train-dev set để tách variance khỏi mismatch."
        },
        {
          "label": "Learning setup",
          "value": "Transfer learning dùng model pretrained; multi-task learning học nhiều task cùng lúc; end-to-end học trực tiếp x -> y nếu có đủ dữ liệu."
        }
      ],
      "theory": "Error analysis giúp ưu tiên việc sửa mô hình bằng dữ liệu thay vì cảm tính. Bước đầu nên xây baseline nhanh, sau đó xem các ví dụ dev bị sai và đếm nhóm lỗi: ảnh mờ, chó giống mèo, nhãn sai, dữ liệu từ domain khác. Nếu một nhóm lỗi chỉ chiếm tỷ lệ nhỏ trong lỗi tổng, sửa nó không thể tạo cải thiện lớn. Với mislabeled data, nếu nhãn sai xuất hiện đáng kể trong dev/test, nên sửa nhất quán; nếu rất nhỏ, có thể không đáng. Khi training data và dev/test data khác phân phối, cần tạo train-dev set lấy từ training distribution nhưng không dùng để train. So sánh train error, train-dev error và dev error để biết vấn đề là variance hay data mismatch. Transfer learning hữu ích khi có task nguồn nhiều dữ liệu và task đích ít dữ liệu nhưng liên quan. Multi-task learning hữu ích khi nhiều task dùng chung representation và mỗi ví dụ có thể có một phần nhãn bị thiếu. End-to-end learning học trực tiếp từ x sang y, giảm hand-designed pipeline, nhưng thường cần rất nhiều dữ liệu và có thể bỏ qua prior knowledge hữu ích.",
      "formulas": [
        {
          "expression": "mismatch_gap = dev_error - train_dev_error",
          "explanation": "Khoảng cách này giúp đo data mismatch giữa train distribution và dev/test distribution."
        },
        {
          "expression": "variance_gap = train_dev_error - train_error",
          "explanation": "Khoảng cách này giúp đo variance khi train-dev cùng phân phối với training set."
        },
        {
          "expression": "ceiling_gain <= fraction_of_errors_in_category",
          "explanation": "Cải thiện tối đa khi sửa một nhóm lỗi bị chặn bởi tỷ lệ lỗi thuộc nhóm đó."
        }
      ],
      "diagram": {
        "nodes": [
          "Baseline nhanh",
          "Xem lỗi dev",
          "Ưu tiên nhóm lỗi",
          "Sửa dữ liệu/mô hình"
        ],
        "description": "Error analysis là vòng lặp định lượng: đếm lỗi, ước lượng ceiling, chọn hành động có tác động lớn nhất."
      },
      "example": "Nếu dev error cao nhưng train-dev error thấp, mô hình không chỉ overfit; dữ liệu dev/test có thể khác training distribution. Khi đó nên thu thập thêm dữ liệu giống dev/test, hoặc dùng domain adaptation/data synthesis cẩn thận.",
      "questions": [
        "What is the first step you should take when starting the project?",
        "Is softmax a good choice for multi-task learning like detecting road signs and traffic signals?",
        "When performing error analysis, which set of images should you manually examine?",
        "In multi-task learning, does every y(i) need to be fully labeled?",
        "How should you split train/dev/test to reduce data mismatch for front-facing camera data?",
        "Given metrics and human-level error of 0.5%, what problems can be identified?",
        "How respond if training data distribution is much easier than dev/test distribution?",
        "Can synthesized foggy images address fog-related errors?",
        "When correcting mislabeled dev data, should you also correct train/test labels?",
        "Advice for building a yellow light detector with a small dataset?",
        "How help a colleague detect nearby vehicles from external microphone audio with limited data?"
      ],
      "answers": [
        {
          "question": "What is the first step you should take when starting the project?",
          "answer": "Xây một hệ baseline nhanh và thiết lập dev/test/metric đúng. Sau đó dùng error analysis để biết nên cải thiện gì."
        },
        {
          "question": "Is softmax a good choice for multi-task learning like detecting road signs and traffic signals?",
          "answer": "Không nếu các nhãn không loại trừ nhau. Multi-task thường dùng nhiều sigmoid outputs vì một ảnh có thể chứa nhiều đối tượng cùng lúc."
        },
        {
          "question": "When performing error analysis, which set of images should you manually examine?",
          "answer": "Nên xem các ví dụ bị sai trên dev set, vì dev set là nơi dùng để ra quyết định cải thiện mô hình."
        },
        {
          "question": "In multi-task learning, does every y(i) need to be fully labeled?",
          "answer": "Không. Multi-task learning có thể xử lý missing labels bằng cách chỉ tính loss cho những task có nhãn."
        },
        {
          "question": "How should you split train/dev/test to reduce data mismatch for front-facing camera data?",
          "answer": "Dev và test nên lấy từ dữ liệu camera thật mục tiêu. Training có thể gồm dữ liệu bổ sung, nhưng nên có train-dev set cùng phân phối train để chẩn đoán mismatch."
        },
        {
          "question": "Given metrics and human-level error of 0.5%, what problems can be identified?",
          "answer": "So sánh train error với human-level để đo avoidable bias; so sánh train-dev với train để đo variance; so sánh dev với train-dev để đo data mismatch."
        },
        {
          "question": "How respond if training data distribution is much easier than dev/test distribution?",
          "answer": "Nhận định này có thể đúng nếu train-dev error thấp hơn dev error nhiều. Cần thêm dữ liệu giống dev/test hoặc điều chỉnh training distribution."
        },
        {
          "question": "Can synthesized foggy images address fog-related errors?",
          "answer": "Có thể, nếu fog overlay đủ thực tế và đa dạng. Nhưng cần kiểm tra dev set để đảm bảo synthetic data không tạo artifact làm mô hình học sai."
        },
        {
          "question": "When correcting mislabeled dev data, should you also correct train/test labels?",
          "answer": "Dev và test nên được sửa nhất quán để đánh giá công bằng. Training labels cũng nên sửa nếu có thể, nhưng dev/test quan trọng hơn cho metric đáng tin cậy."
        },
        {
          "question": "Advice for building a yellow light detector with a small dataset?",
          "answer": "Dùng transfer learning từ model vision pretrained hoặc model đã học traffic light/task liên quan, freeze một phần layer rồi fine-tune với dữ liệu nhỏ."
        },
        {
          "question": "How help a colleague detect nearby vehicles from external microphone audio with limited data?",
          "answer": "Dùng transfer learning từ model audio pretrained, thu thêm dữ liệu gần domain thật, hoặc xây baseline nhỏ rồi error analysis để biết thiếu loại âm thanh nào."
        }
      ]
    },
    {
      "id": "section-4-1",
      "course": "Deep Learning",
      "chapter": "4",
      "deckId": "4.1",
      "deck": "Convolutional Neural Networks",
      "sourcePdf": "4.1 Convolutional Neural Networks.pdf",
      "title": "Convolutional Neural Networks",
      "keywords": [
        "CNN",
        "convolution",
        "padding",
        "stride",
        "pooling",
        "parameter sharing",
        "sparsity"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu vì sao CNN phù hợp với ảnh, cách convolution/padding/stride/pooling hoạt động và cách tính kích thước output."
        },
        {
          "label": "Ý chính",
          "value": "CNN tận dụng parameter sharing và sparsity of connections để học đặc trưng không gian với ít tham số hơn fully connected network."
        },
        {
          "label": "Layer",
          "value": "Một CNN layer thường gồm convolution, bias, activation như ReLU; sau đó có thể dùng pooling để giảm kích thước không gian."
        },
        {
          "label": "Kích thước",
          "value": "Output size phụ thuộc input size, filter size, padding và stride."
        }
      ],
      "theory": "CNN được thiết kế cho dữ liệu dạng lưới như ảnh. Thay vì nối mọi pixel với mọi neuron, convolution dùng filter nhỏ quét qua ảnh để phát hiện cạnh, texture hoặc pattern cục bộ. Cùng một filter được dùng ở nhiều vị trí nên số tham số giảm mạnh và mô hình nhận ra cùng một đặc trưng ở nhiều nơi trong ảnh. Padding thêm viền để giữ thông tin biên và kiểm soát kích thước output. Stride quyết định bước nhảy của filter, stride lớn làm output nhỏ hơn. Với ảnh RGB, filter có chiều sâu bằng số channel input. Nhiều filter tạo ra nhiều channel output. Pooling như max pooling giữ đặc trưng nổi bật và giảm kích thước không gian nhưng không có tham số học. CNN thường xếp nhiều convolution/pooling layer rồi dùng fully connected hoặc classifier ở cuối.",
      "formulas": [
        {
          "expression": "n_H = floor((n_H_prev + 2p - f) / s) + 1",
          "explanation": "Chiều cao output sau convolution."
        },
        {
          "expression": "n_W = floor((n_W_prev + 2p - f) / s) + 1",
          "explanation": "Chiều rộng output sau convolution."
        },
        {
          "expression": "parameters = f * f * n_C_prev * n_C + n_C",
          "explanation": "Số tham số của convolution layer gồm trọng số filter và bias."
        }
      ],
      "diagram": {
        "nodes": [
          "Input image",
          "Convolution filters",
          "Activation/pooling",
          "Classifier"
        ],
        "description": "CNN học đặc trưng theo tầng: từ cạnh đơn giản đến pattern phức tạp rồi phân loại."
      },
      "example": "Input 63x63x16, filter 7x7, stride 2, padding 0, 32 filters: n_H = floor((63-7)/2)+1 = 29, n_W = 29, output là 29x29x32.",
      "questions": [
        "What kind of edges does the filter detect when applied to a grayscale image?",
        "If a 300x300 RGB image is input to a fully connected layer with 100 neurons, how many parameters are in this hidden layer including bias?",
        "If you apply 100 convolutional filters of size 5x5 to a 300x300 RGB image, how many parameters including biases does this layer have?",
        "What is the output volume when convolving a 63x63x16 input with 32 filters of size 7x7, stride 2, and no padding?",
        "If a 15x15x8 input volume is padded with 2 pixels, what is the resulting volume size?",
        "What padding should you use to perform a same convolution on a 63x63x16 input with 7x7 filters and stride 1?",
        "What is the output volume when applying 2x2 max pooling with stride 2 to a 32x32x16 input?",
        "True or false: Pooling layers do not affect backpropagation because they have no parameters.",
        "Name two advantages of parameter sharing in ConvNets.",
        "What does sparsity of connections mean in convolutional layers?",
        "How many parameters are in a convolutional layer with 128 filters of size 3x3 on a 256x256 grayscale image?",
        "What is the output volume for 127x127x16 input, 32 filters 5x5, stride 2, no padding?",
        "What is the volume size after padding a 31x31x32 input with pad = 1?",
        "What are two hyperparameters of a pooling layer?",
        "List two benefits of using convolutional layers.",
        "When a convolution is done with stride 1, on which input pixels does a specific output pixel depend?",
        "If a CNN layer has 10 filters of size 3x3x3, how many parameters does this layer have (including biases)?"
      ],
      "answers": [
        {
          "question": "What kind of edges does the filter detect when applied to a grayscale image?",
          "answer": "Tùy giá trị filter. Ví dụ vertical edge filter phát hiện chuyển tiếp sáng-tối theo chiều ngang của ảnh, còn horizontal edge filter phát hiện cạnh ngang."
        },
        {
          "question": "If a 300x300 RGB image is input to a fully connected layer with 100 neurons, how many parameters are in this hidden layer including bias?",
          "answer": "Input có 300*300*3 = 270000 features. Với 100 neurons: 270000*100 weights + 100 biases = 27000100 parameters."
        },
        {
          "question": "If you apply 100 convolutional filters of size 5x5 to a 300x300 RGB image, how many parameters including biases does this layer have?",
          "answer": "Mỗi filter có 5*5*3 weights + 1 bias = 76 parameters. Với 100 filters, tổng là 7600 parameters."
        },
        {
          "question": "What is the output volume when convolving a 63x63x16 input with 32 filters of size 7x7, stride 2, and no padding?",
          "answer": "n = floor((63 - 7)/2) + 1 = 29. Có 32 filters nên output volume là 29x29x32."
        },
        {
          "question": "If a 15x15x8 input volume is padded with 2 pixels, what is the resulting volume size?",
          "answer": "Padding p=2 tăng height và width thêm 4, không đổi channels. Kết quả là 19x19x8."
        },
        {
          "question": "What padding should you use to perform a same convolution on a 63x63x16 input with 7x7 filters and stride 1?",
          "answer": "Với stride 1, same convolution cần p = (f - 1)/2 = 3."
        },
        {
          "question": "What is the output volume when applying 2x2 max pooling with stride 2 to a 32x32x16 input?",
          "answer": "Pooling không đổi số channels. Height/width giảm từ 32 xuống 16, nên output là 16x16x16."
        },
        {
          "question": "True or false: Pooling layers do not affect backpropagation because they have no parameters.",
          "answer": "False. Pooling không có parameters nhưng vẫn ảnh hưởng backpropagation: max pooling truyền gradient về vị trí max, average pooling chia gradient đều trong vùng pooling."
        },
        {
          "question": "Name two advantages of parameter sharing in ConvNets.",
          "answer": "Nó giảm mạnh số parameters và cho phép cùng một filter phát hiện cùng đặc trưng ở nhiều vị trí khác nhau trong ảnh."
        },
        {
          "question": "What does sparsity of connections mean in convolutional layers?",
          "answer": "Mỗi output unit chỉ kết nối với một receptive field nhỏ của input, thay vì nối với toàn bộ input như fully connected layer."
        },
        {
          "question": "How many parameters are in a convolutional layer with 128 filters of size 3x3 on a 256x256 grayscale image?",
          "answer": "Grayscale có 1 channel. Mỗi filter có 3*3*1 weights + 1 bias = 10 parameters; 128 filters có 1280 parameters."
        },
        {
          "question": "What is the output volume for 127x127x16 input, 32 filters 5x5, stride 2, no padding?",
          "answer": "n = floor((127 - 5)/2) + 1 = 62. Có 32 filters nên output là 62x62x32."
        },
        {
          "question": "What is the volume size after padding a 31x31x32 input with pad = 1?",
          "answer": "Padding p=1 tăng mỗi chiều không gian thêm 2, không đổi channels. Kết quả là 33x33x32."
        },
        {
          "question": "What are two hyperparameters of a pooling layer?",
          "answer": "Hai hyperparameters chính là filter size f và stride s; ngoài ra cần chọn max pooling hay average pooling."
        },
        {
          "question": "List two benefits of using convolutional layers.",
          "answer": "Convolution giảm số parameters nhờ parameter sharing và khai thác cấu trúc cục bộ của ảnh nhờ sparsity of connections."
        },
        {
          "question": "When a convolution is done with stride 1, on which input pixels does a specific output pixel depend?",
          "answer": "Nó phụ thuộc vào patch input nằm dưới filter tại vị trí tương ứng, tức receptive field của output pixel đó."
        },
        {
          "question": "If a CNN layer has 10 filters of size 3x3x3, how many parameters does this layer have (including biases)?",
          "answer": "Each filter has 3*3*3 weights plus 1 bias, so 28 parameters per filter. With 10 filters, the layer has 280 parameters."
        }
      ]
    },
    {
      "id": "section-4-2",
      "course": "Deep Learning",
      "chapter": "4",
      "deckId": "4.2",
      "deck": "Case Studies",
      "sourcePdf": "4.2 Case Studies.pdf",
      "title": "CNN Case Studies",
      "keywords": [
        "LeNet",
        "AlexNet",
        "VGG",
        "ResNet",
        "Inception",
        "MobileNet",
        "EfficientNet",
        "transfer learning"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Học các kiến trúc CNN kinh điển và pattern thiết kế hiện đại: ResNet, Inception, MobileNet, EfficientNet và transfer learning."
        },
        {
          "label": "Kiến trúc cổ điển",
          "value": "LeNet, AlexNet và VGG đặt nền móng cho việc xếp convolution/pooling/FC layer."
        },
        {
          "label": "ResNet",
          "value": "Skip connection giúp train mạng sâu bằng cách học residual F(x) thay vì toàn bộ mapping."
        },
        {
          "label": "Hiệu quả",
          "value": "1x1 convolution, depthwise separable convolution và compound scaling giúp giảm compute."
        }
      ],
      "theory": "Case studies giúp nhận ra các block thiết kế đã được kiểm chứng. LeNet dùng convolution và pooling cho chữ số viết tay. AlexNet chứng minh deep CNN mạnh trên ImageNet. VGG dùng nhiều convolution 3x3 đơn giản, dễ hiểu nhưng nặng. ResNet thêm skip connections để gradient đi qua mạng sâu dễ hơn; nếu layer mới không hữu ích, block có thể học gần identity. 1x1 convolution trộn thông tin giữa các channel và thường dùng để giảm hoặc tăng số channel. Inception chạy nhiều filter size song song để bắt nhiều scale, dùng 1x1 bottleneck giảm chi phí. MobileNet dùng depthwise separable convolution: depthwise lọc từng channel, pointwise 1x1 trộn channel, giảm compute mạnh. EfficientNet scale depth, width và resolution theo compound scaling. Trong thực tế, transfer learning từ pretrained ConvNet thường là lựa chọn mạnh, nhất là khi dataset nhỏ.",
      "formulas": [
        {
          "expression": "a[l+2] = g(z[l+2] + a[l])",
          "explanation": "ResNet thêm skip connection từ a[l] vào block sau."
        },
        {
          "expression": "normal_cost = f * f * n_C_prev * n_C",
          "explanation": "Chi phí convolution thường."
        },
        {
          "expression": "depthwise_separable_cost = f * f * n_C_prev + n_C_prev * n_C",
          "explanation": "Chi phí depthwise separable convolution thường nhỏ hơn nhiều."
        }
      ],
      "diagram": {
        "nodes": [
          "Classic CNNs",
          "ResNet/Inception",
          "MobileNet/EfficientNet",
          "Transfer learning"
        ],
        "description": "Các case studies đi từ kiến trúc cơ bản đến block tối ưu cho độ sâu, multi-scale và thiết bị hạn chế."
      },
      "example": "Với dataset nhỏ, thường freeze phần feature extractor của pretrained ConvNet, chỉ train classifier mới. Nếu dữ liệu nhiều hơn, fine-tune thêm các layer sâu.",
      "questions": [
        "What typically happens to nH, nW, and nC as you go deeper in a ConvNet?",
        "What patterns do you typically observe in a ConvNet architecture?",
        "In deep networks using valid padding, do we usually rely only on pooling layers to reduce spatial dimensions?",
        "Does adding more layers to a plain network always result in a lower training error?",
        "Which statements are true about Residual Networks?",
        "How many parameters including bias does a 1x1 convolutional filter have for an input of size 64x64x16?",
        "What is true about 1x1 convolutions and pooling layers?",
        "What is true about Inception Networks?",
        "Why are open-source ConvNet implementations commonly used?",
        "What are W, Y, and Z in the MobileNet v2 bottleneck block?",
        "What is true about depthwise separable convolutions?",
        "If the input to a MobileNet v2 depthwise convolution layer is 64x64x16 and the expansion uses 32 filters, what is the input and output size of the depthwise convolution layer?",
        "What transfer learning strategy is recommended for small datasets?",
        "Are 1x1 convolutions the same as multiplying by a single number?",
        "What happens to model performance if a ResNet block is added at the end of a network?",
        "In a ResNet equation, which part corresponds to the skip connection?",
        "Is the main motivation behind ResNets to reduce overfitting caused by model complexity?",
        "Why is transfer learning especially useful when training data is small or compute is limited?",
        "When labeled data is scarce, why is hand-engineering often more important?"
      ],
      "answers": [
        {
          "question": "What typically happens to nH, nW, and nC as you go deeper in a ConvNet?",
          "answer": "nH và nW thường giảm dần, còn nC thường tăng dần. Mạng giữ ít vị trí không gian hơn nhưng học nhiều feature channels hơn."
        },
        {
          "question": "What patterns do you typically observe in a ConvNet architecture?",
          "answer": "Thường có các block convolution/pooling lặp lại; spatial size giảm, số channels tăng, cuối mạng là classifier hoặc fully connected/softmax."
        },
        {
          "question": "In deep networks using valid padding, do we usually rely only on pooling layers to reduce spatial dimensions?",
          "answer": "Không. Valid convolution cũng làm giảm height/width; pooling chỉ là một cách giảm spatial dimensions."
        },
        {
          "question": "Does adding more layers to a plain network always result in a lower training error?",
          "answer": "Không. Plain deep networks có thể khó train hơn do gradient problems; ResNet giải quyết bằng skip connections."
        },
        {
          "question": "Which statements are true about Residual Networks?",
          "answer": "ResNets dùng skip connections, giúp train mạng rất sâu và cho phép block học residual hoặc identity mapping nếu layer bổ sung không hữu ích."
        },
        {
          "question": "How many parameters including bias does a 1x1 convolutional filter have for an input of size 64x64x16?",
          "answer": "Một 1x1 filter nhìn qua toàn bộ 16 channels: 1*1*16 weights + 1 bias = 17 parameters."
        },
        {
          "question": "What is true about 1x1 convolutions and pooling layers?",
          "answer": "1x1 convolution trộn thông tin giữa channels và có thể đổi số channels; pooling chủ yếu giảm spatial dimensions và không có learnable parameters."
        },
        {
          "question": "What is true about Inception Networks?",
          "answer": "Inception chạy nhiều nhánh filter/pooling song song để bắt nhiều scale, thường dùng 1x1 convolution làm bottleneck giảm compute."
        },
        {
          "question": "Why are open-source ConvNet implementations commonly used?",
          "answer": "Vì kiến trúc phức tạp, implementation đã được cộng đồng debug, thường có pretrained weights và giúp tiết kiệm thời gian."
        },
        {
          "question": "What are W, Y, and Z in the MobileNet v2 bottleneck block?",
          "answer": "W là số channels input, Y là số channels sau expansion, Z là số channels output sau projection. Block mở rộng channels, depthwise convolution, rồi project xuống Z."
        },
        {
          "question": "What is true about depthwise separable convolutions?",
          "answer": "Nó tách spatial filtering theo từng channel và channel mixing bằng 1x1 convolution, giảm computation mạnh so với convolution thường."
        },
        {
          "question": "If the input to a MobileNet v2 depthwise convolution layer is 64x64x16 and the expansion uses 32 filters, what is the input and output size of the depthwise convolution layer?",
          "answer": "Sau expansion, depthwise convolution nhận 64x64x32. Nếu stride 1 và same padding, output của depthwise convolution cũng là 64x64x32."
        },
        {
          "question": "What transfer learning strategy is recommended for small datasets?",
          "answer": "Dùng pretrained ConvNet, freeze phần lớn feature extractor và chỉ train classifier/head mới. Nếu có nhiều dữ liệu hơn thì fine-tune thêm các layer sâu."
        },
        {
          "question": "Are 1x1 convolutions the same as multiplying by a single number?",
          "answer": "False. Với nhiều channels, 1x1 convolution là phép tuyến tính trên vector channels tại mỗi pixel, không chỉ nhân một scalar."
        },
        {
          "question": "What happens to model performance if a ResNet block is added at the end of a network?",
          "answer": "Training error về lý thuyết không nên tệ hơn vì block có thể học identity mapping; skip connection giúp thêm layer sâu dễ train hơn."
        },
        {
          "question": "In a ResNet equation, which part corresponds to the skip connection?",
          "answer": "Trong a[l+2] = g(z[l+2] + a[l]), phần a[l] được cộng trực tiếp là skip connection."
        },
        {
          "question": "Is the main motivation behind ResNets to reduce overfitting caused by model complexity?",
          "answer": "False. Mục tiêu chính là giúp optimize/train mạng rất sâu bằng gradient flow tốt hơn, không phải chủ yếu để giảm overfitting."
        },
        {
          "question": "Why is transfer learning especially useful when training data is small or compute is limited?",
          "answer": "Pretrained models already learn generic visual features on large datasets, so you can reuse them and only fine-tune a small part. This reduces data needs, training time, and compute cost."
        },
        {
          "question": "When labeled data is scarce, why is hand-engineering often more important?",
          "answer": "With little labeled data, model learning is weak and high variance is common. Better features, priors, and domain-specific preprocessing can inject useful structure and improve performance."
        }
      ]
    },
    {
      "id": "section-4-3",
      "course": "Deep Learning",
      "chapter": "4",
      "deckId": "4.3",
      "deck": "Object Detection",
      "sourcePdf": "4.3 Object Detection.pdf",
      "title": "Object Detection and Semantic Segmentation",
      "keywords": [
        "object localization",
        "YOLO",
        "IoU",
        "non-max suppression",
        "anchor boxes",
        "U-Net",
        "semantic segmentation"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu localization, detection, YOLO, IoU, non-max suppression, anchor boxes và semantic segmentation bằng U-Net."
        },
        {
          "label": "Localization",
          "value": "Dự đoán class và bounding box cho một object."
        },
        {
          "label": "Detection",
          "value": "Phát hiện nhiều object trong ảnh, thường dùng grid cells, anchor boxes và NMS."
        },
        {
          "label": "Segmentation",
          "value": "Semantic segmentation gán class cho từng pixel, U-Net dùng encoder-decoder và skip connections."
        }
      ],
      "theory": "Object localization mở rộng classification bằng cách dự đoán bounding box. Object detection cần xử lý nhiều object trong cùng ảnh. Sliding windows cổ điển tốn compute; convolutional implementation chạy hiệu quả hơn. YOLO chia ảnh thành grid, mỗi cell chịu trách nhiệm object có tâm nằm trong cell đó, dự đoán pc, bounding box và class. IoU đo độ chồng lấp giữa predicted box và ground truth. Non-max suppression loại box trùng lặp bằng cách giữ box có confidence cao nhất rồi loại các box có IoU quá cao với nó. Anchor boxes cho phép một cell dự đoán nhiều object có hình dạng khác nhau. Semantic segmentation khác detection: thay vì box, mô hình dự đoán class cho từng pixel. U-Net dùng downsampling để lấy context, upsampling/transpose convolution để khôi phục resolution, và skip connections để giữ chi tiết không gian.",
      "formulas": [
        {
          "expression": "IoU = area(intersection) / area(union)",
          "explanation": "Intersection over Union đo độ khớp giữa hai bounding boxes."
        },
        {
          "expression": "y = [pc, bx, by, bh, bw, c1, c2, ...]",
          "explanation": "Một vector output cơ bản cho detection gồm objectness, box và class probabilities."
        },
        {
          "expression": "YOLO_output = grid_H * grid_W * anchors * (5 + classes)",
          "explanation": "Kích thước output YOLO phụ thuộc grid, số anchors và số classes."
        }
      ],
      "diagram": {
        "nodes": [
          "Image grid",
          "Box/class prediction",
          "NMS + anchors",
          "Final detections"
        ],
        "description": "YOLO dự đoán dense boxes trong một lần forward rồi dùng NMS để lấy các detection cuối."
      },
      "example": "YOLO với grid 19x19, 5 anchors, 20 classes có output 19x19x5x25, thường viết là 19x19x125.",
      "questions": [
        "What is the correct label y for a 3-class object detection output with classes pedestrian, car, motorcycle?",
        "What should a network output to detect a fixed-size soft-drink can in an image?",
        "How many output units are needed to detect N facial landmarks?",
        "Do object detection systems require bounding boxes in training data?",
        "Does increasing stride in non-convolutional sliding windows increase accuracy but reduce computation?",
        "In YOLO, is only the cell containing object center responsible?",
        "What is IoU for boxes with 1x1 overlap, areas 4 and 6?",
        "After non-max suppression with threshold 0.4 and IoU 0.5, how many boxes remain?",
        "For YOLO 19x19, 20 classes, 5 anchors, what is output dimension?",
        "Is y = [pc, bx, by, bh, bw, c1] correct for soft-drink detection?",
        "What is the shape of y_hat(i) for a face landmark detector with N landmarks?",
        "Can semantic segmentation only classify pixels in a binary way?",
        "In transpose convolution with stride 2 and padding 1, what are X, Y, Z for the given input and filter?",
        "Does U-Net always output h x w x c?",
        "Does U-Net always output h x w?",
        "In YOLO, is each object assigned to its grid cell and anchor box with highest IoU?",
        "Is pixel-wise tumor segmentation a localization task?",
        "Can anchor boxes replace bounding box coordinates?",
        "For YOLO output 19x19x125, how is 125 decomposed in terms of anchors and classes?"
      ],
      "answers": [
        {
          "question": "What is the correct label y for a 3-class object detection output with classes pedestrian, car, motorcycle?",
          "answer": "Vector nhãn thường có dạng [pc, bx, by, bh, bw, c1, c2, c3]. Nếu có object, pc=1, b* là tọa độ box, và đúng class được đặt 1 trong ba phần tử class; nếu không có object, pc=0 và các giá trị còn lại thường không được tính loss."
        },
        {
          "question": "What should a network output to detect a fixed-size soft-drink can in an image?",
          "answer": "Nếu kích thước can cố định và chỉ cần localization, mạng có thể output pc cùng tọa độ tâm bx, by; nếu vẫn cần box đầy đủ thì output thêm bh, bw, nhưng với fixed-size có thể coi bh, bw là hằng số."
        },
        {
          "question": "How many output units are needed to detect N facial landmarks?",
          "answer": "Mỗi landmark cần hai tọa độ x,y, nên cần 2N output units."
        },
        {
          "question": "Do object detection systems require bounding boxes in training data?",
          "answer": "Có. Supervised object detection cần nhãn bounding boxes để học vị trí object."
        },
        {
          "question": "Does increasing stride in non-convolutional sliding windows increase accuracy but reduce computation?",
          "answer": "Không. Stride lớn hơn làm giảm số cửa sổ nên giảm computation, nhưng thường giảm localization accuracy vì bỏ qua nhiều vị trí."
        },
        {
          "question": "In YOLO, is only the cell containing object center responsible?",
          "answer": "Đúng. Cell chứa tâm object chịu trách nhiệm dự đoán object đó, sau đó anchor box phù hợp nhất thường được chọn."
        },
        {
          "question": "What is IoU for boxes with 1x1 overlap, areas 4 and 6?",
          "answer": "Intersection = 1. Union = 4 + 6 - 1 = 9. IoU = 1/9."
        },
        {
          "question": "After non-max suppression with threshold 0.4 and IoU 0.5, how many boxes remain?",
          "answer": "Nếu hai boxes cùng class và box có confidence thấp hơn có IoU 0.5 với box mạnh nhất, nó sẽ bị loại vì 0.5 > 0.4. Không có danh sách boxes cụ thể nên quy tắc là giữ box confidence cao nhất và loại các box cùng class có IoU vượt ngưỡng."
        },
        {
          "question": "For YOLO 19x19, 20 classes, 5 anchors, what is output dimension?",
          "answer": "Mỗi anchor output 5 + 20 = 25 giá trị. Tổng output là 19x19x5x25 = 19x19x125."
        },
        {
          "question": "Is y = [pc, bx, by, bh, bw, c1] correct for soft-drink detection?",
          "answer": "Nếu chỉ có một class soft-drink can thì vector này có thể dùng được, nhưng c1 là dư nếu class đã cố định. Khi không có object, pc=0 và các thành phần box/class thường không quan trọng trong loss."
        },
        {
          "question": "What is the shape of y_hat(i) for a face landmark detector with N landmarks?",
          "answer": "Với N landmarks, output của một ví dụ là vector 2N chiều, thường shape (2N, 1) hoặc (2N,) tùy implementation."
        },
        {
          "question": "Can semantic segmentation only classify pixels in a binary way?",
          "answer": "Không. Semantic segmentation có thể binary hoặc multi-class, output thường là h x w x number_of_classes."
        },
        {
          "question": "In transpose convolution with stride 2 and padding 1, what are X, Y, Z for the given input and filter?",
          "answer": "Câu này phụ thuộc hình minh họa cụ thể trong slide. Quy tắc chung: transpose convolution chèn khoảng trống theo stride, áp dụng filter để tăng spatial size; với stride 2, padding 1, output thường lớn hơn input xấp xỉ gấp đôi theo chiều không gian."
        },
        {
          "question": "Does U-Net always output h x w x c?",
          "answer": "Thường U-Net segmentation output có cùng spatial size h x w và số channel bằng số classes, nhưng chi tiết phụ thuộc thiết kế."
        },
        {
          "question": "Does U-Net always output h x w?",
          "answer": "Không nhất thiết. Với binary segmentation có thể output h x w hoặc h x w x 1; với multi-class thường là h x w x c."
        },
        {
          "question": "In YOLO, is each object assigned to its grid cell and anchor box with highest IoU?",
          "answer": "Đúng. Object được gán cho grid cell chứa tâm object và anchor box có IoU cao nhất với ground-truth box."
        },
        {
          "question": "Is pixel-wise tumor segmentation a localization task?",
          "answer": "Nó là segmentation task, chi tiết hơn localization. Thay vì chỉ dự đoán bounding box, mô hình dự đoán nhãn cho từng pixel thuộc tumor."
        },
        {
          "question": "Can anchor boxes replace bounding box coordinates?",
          "answer": "Không. Anchor boxes là prior/reference; mô hình vẫn cần dự đoán điều chỉnh box coordinates."
        },
        {
          "question": "For YOLO output 19x19x125, how is 125 decomposed in terms of anchors and classes?",
          "answer": "125 = 5 * (5 + 20): 5 anchor boxes, and for each anchor there are 5 box/objectness values plus 20 class probabilities."
        }
      ]
    },
    {
      "id": "section-4-4",
      "course": "Deep Learning",
      "chapter": "4",
      "deckId": "4.4",
      "deck": "Face recognition",
      "sourcePdf": "4.4 Face recognition.pdf",
      "title": "Face Recognition, Triplet Loss and Neural Style Transfer",
      "keywords": [
        "face verification",
        "face recognition",
        "one-shot learning",
        "Siamese network",
        "triplet loss",
        "style transfer",
        "3D convolution"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu face verification/recognition, similarity learning, Siamese network, triplet loss, neural style transfer và convolution 1D/3D."
        },
        {
          "label": "Face verification",
          "value": "So sánh một ảnh mặt với một danh tính đã biết."
        },
        {
          "label": "Face recognition",
          "value": "So sánh ảnh với K người trong database."
        },
        {
          "label": "Triplet loss",
          "value": "Kéo anchor-positive gần nhau và đẩy anchor-negative xa nhau."
        }
      ],
      "theory": "Face verification trả lời câu hỏi hai ảnh có cùng người không; face recognition tìm người trong database. Vì có thể chỉ có một vài ảnh mỗi người, bài toán cần one-shot learning. Siamese network học embedding f(img), sao cho khoảng cách giữa ảnh cùng người nhỏ và khác người lớn. Triplet loss dùng bộ Anchor, Positive, Negative để huấn luyện embedding. Neural style transfer là bài toán tối ưu ảnh generated G để giữ content của ảnh C và style của ảnh S. Content cost so activation ở layer sâu; style cost dùng Gram matrix để đo tương quan giữa feature maps. ConvNets cũng có thể mở rộng sang 1D sequence hoặc 3D volume/video, trong đó filter quét theo cả không gian và thời gian.",
      "formulas": [
        {
          "expression": "d(img1, img2) = norm(f(img1) - f(img2))",
          "explanation": "Khoảng cách embedding dùng cho verification."
        },
        {
          "expression": "L = max(norm(f(A)-f(P))^2 - norm(f(A)-f(N))^2 + alpha, 0)",
          "explanation": "Triplet loss yêu cầu anchor gần positive hơn negative ít nhất margin alpha."
        },
        {
          "expression": "J(G) = alpha J_content(C,G) + beta J_style(S,G)",
          "explanation": "Style transfer tối ưu ảnh G bằng tổng content cost và style cost."
        }
      ],
      "diagram": {
        "nodes": [
          "Face image",
          "Siamese CNN",
          "Embedding distance",
          "Verify/recognize"
        ],
        "description": "Siamese network biến ảnh thành embedding rồi dùng khoảng cách để ra quyết định."
      },
      "example": "Nếu một công ty có danh sách nhân viên thay đổi, cách tốt là học embedding chung trên dataset lớn, rồi thêm/xóa người trong database mà không cần train lại toàn bộ model.",
      "questions": [
        "Does face verification compare one face, while recognition compares against K faces?",
        "Why do we learn a function d(img1, img2) for face verification?",
        "Is it reasonable to train on 100000 images of 100000 different people?",
        "What is the correct definition of the triplet loss?",
        "In a Siamese network, do both branches have different inputs but identical parameters?",
        "Are you more likely to find a cat detector unit in deeper layers?",
        "Is neural style transfer trained as a supervised learning task?",
        "Does the style matrix G[l] measure how feature detector activations in layer l correlate?",
        "In neural style transfer, what is updated in each optimization step?",
        "For a 3D input volume 32x32x32x16 with 32 filters of size 3x3x3, stride 1, no padding, what is the output volume?",
        "What is the output volume for 3D input 64x64x64x3 using 16 filters of size 4x4x4, stride 2, zero padding?",
        "In neural style transfer, which gradients are used?",
        "What losses are used to generate the image in neural style transfer?",
        "When is triplet loss large?",
        "If you want to verify if a face belongs to a workgroup with changing members, what approach is best?",
        "Does face recognition require K comparisons?",
        "To train a triplet loss system for face verification, must data come only from current team members?",
        "Do the upper and lower networks in a Siamese network share parameters?",
        "In neural style transfer, do we optimize image pixels instead of network weights?",
        "Does the style matrix G[l] in deep layers measure feature detector correlation?",
        "How can ConvNets be generalized from 2D images to 1D signals such as EKG or text sequences?",
        "How can ConvNets be generalized from 2D to 3D inputs such as videos?"
      ],
      "answers": [
        {
          "question": "Does face verification compare one face, while recognition compares against K faces?",
          "answer": "Đúng. Verification kiểm tra một ảnh với một identity cụ thể; recognition tìm ảnh đó thuộc ai trong K identities."
        },
        {
          "question": "Why do we learn a function d(img1, img2) for face verification?",
          "answer": "Vì face verification là one-shot learning: hệ thống cần đo độ giống nhau giữa hai ảnh mặt bằng khoảng cách embedding, thay vì train classifier riêng cho từng người mới."
        },
        {
          "question": "Is it reasonable to train on 100000 images of 100000 different people?",
          "answer": "Không lý tưởng cho triplet loss vì mỗi người chỉ có một ảnh, không tạo được anchor-positive pairs. Nên có nhiều ảnh cho mỗi identity."
        },
        {
          "question": "What is the correct definition of the triplet loss?",
          "answer": "Triplet loss ép anchor A gần positive P hơn negative N ít nhất một margin alpha: max(||f(A)-f(P)||^2 - ||f(A)-f(N)||^2 + alpha, 0)."
        },
        {
          "question": "In a Siamese network, do both branches have different inputs but identical parameters?",
          "answer": "Đúng. Hai nhánh Siamese nhận hai input khác nhau nhưng dùng cùng parameters để embedding nằm trong cùng không gian so sánh."
        },
        {
          "question": "Are you more likely to find a cat detector unit in deeper layers?",
          "answer": "Đúng. Layer sâu học feature semantic/phức tạp hơn nên dễ có unit phản ứng với object-level concept như cat hơn layer nông."
        },
        {
          "question": "Is neural style transfer trained as a supervised learning task?",
          "answer": "Không. Neural style transfer thường tối ưu trực tiếp generated image bằng content/style loss, không học từ cặp dữ liệu có nhãn."
        },
        {
          "question": "Does the style matrix G[l] measure how feature detector activations in layer l correlate?",
          "answer": "Đúng. Style matrix hay Gram matrix đo tương quan giữa activations của các feature detectors trong layer l."
        },
        {
          "question": "In neural style transfer, what is updated in each optimization step?",
          "answer": "Cập nhật pixel của generated image G. Weights của pretrained CNN thường được giữ cố định."
        },
        {
          "question": "For a 3D input volume 32x32x32x16 with 32 filters of size 3x3x3, stride 1, no padding, what is the output volume?",
          "answer": "Mỗi chiều không gian: 32 - 3 + 1 = 30. Với 32 filters, output volume là 30x30x30x32."
        },
        {
          "question": "What is the output volume for 3D input 64x64x64x3 using 16 filters of size 4x4x4, stride 2, zero padding?",
          "answer": "Mỗi chiều: floor((64 - 4)/2) + 1 = 31. Với 16 filters, output là 31x31x31x16."
        },
        {
          "question": "In neural style transfer, which gradients are used?",
          "answer": "Dùng gradient của total cost theo generated image G, gồm gradient từ content loss và style loss đối với pixel ảnh sinh."
        },
        {
          "question": "What losses are used to generate the image in neural style transfer?",
          "answer": "Dùng content loss để giữ nội dung ảnh C và style loss để khớp phong cách ảnh S; tổng loss thường là alpha*J_content + beta*J_style."
        },
        {
          "question": "When is triplet loss large?",
          "answer": "Triplet loss lớn khi anchor-positive còn xa hoặc anchor-negative quá gần, làm vi phạm margin."
        },
        {
          "question": "If you want to verify if a face belongs to a workgroup with changing members, what approach is best?",
          "answer": "Dùng embedding-based verification: lưu embedding của thành viên hiện tại trong database, khi nhóm thay đổi chỉ cập nhật database thay vì train lại model."
        },
        {
          "question": "Does face recognition require K comparisons?",
          "answer": "Cách cơ bản là so embedding với K người trong database để tìm nearest identity; có thể tối ưu bằng indexing nhưng vẫn là bài toán so khớp với database."
        },
        {
          "question": "To train a triplet loss system for face verification, must data come only from current team members?",
          "answer": "Không. Nên train trên tập lớn có nhiều identities và nhiều ảnh mỗi identity để học embedding tổng quát; không bắt buộc chỉ dùng thành viên hiện tại."
        },
        {
          "question": "Do the upper and lower networks in a Siamese network share parameters?",
          "answer": "Có. Upper/lower Siamese branches share cùng CNN parameters."
        },
        {
          "question": "In neural style transfer, do we optimize image pixels instead of network weights?",
          "answer": "Đúng. Trong style transfer, ta tối ưu image pixels của G; network weights giữ cố định."
        },
        {
          "question": "Does the style matrix G[l] in deep layers measure feature detector correlation?",
          "answer": "Đúng. Gram matrix ở layer sâu vẫn đo correlation giữa feature detectors, nhưng correlation đó thường ở mức pattern/semantic cao hơn."
        },
        {
          "question": "How can ConvNets be generalized from 2D images to 1D signals such as EKG or text sequences?",
          "answer": "Use 1D convolutions where the kernel slides along one axis (time or token position). The same ideas still apply: local receptive fields, shared parameters, and stacked layers for hierarchical features."
        },
        {
          "question": "How can ConvNets be generalized from 2D to 3D inputs such as videos?",
          "answer": "Use 3D kernels that convolve across height, width, and time/depth. This lets the model capture both spatial patterns and temporal motion cues in a unified architecture."
        }
      ]
    },
    {
      "id": "section-5-1",
      "course": "Deep Learning",
      "chapter": "5",
      "deckId": "5.1",
      "deck": "Recurrent Neural Networks",
      "sourcePdf": "5.1 Recurrent Neural Networks.pdf",
      "title": "Recurrent Neural Networks",
      "keywords": [
        "sequence model",
        "RNN",
        "BPTT",
        "language model",
        "GRU",
        "LSTM",
        "BRNN"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu sequence models, RNN forward/backward, language modeling, GRU, LSTM, bidirectional và deep RNN."
        },
        {
          "label": "RNN",
          "value": "Dùng hidden state để truyền thông tin qua time steps."
        },
        {
          "label": "Vấn đề",
          "value": "RNN cơ bản dễ gặp vanishing gradients với dependency dài."
        },
        {
          "label": "Giải pháp",
          "value": "GRU/LSTM dùng gates để kiểm soát nhớ/quên và giữ thông tin dài hạn."
        }
      ],
      "theory": "Sequence models xử lý dữ liệu có thứ tự như văn bản, âm thanh, time series. RNN dùng hidden state a[t] để kết hợp input hiện tại x[t] và trạng thái trước a[t-1]. Backpropagation through time unroll RNN theo thời gian để tính gradient. RNN có nhiều kiểu: many-to-one cho sentiment, one-to-many cho generation, many-to-many cho tagging hoặc translation. Language model học xác suất token tiếp theo và có thể sampling để sinh chuỗi mới. RNN cơ bản khó học quan hệ xa do vanishing gradients. GRU dùng update/reset gates; LSTM dùng cell state, forget/update/output gates để giữ long-term dependencies. Bidirectional RNN dùng cả quá khứ và tương lai, phù hợp khi toàn bộ chuỗi đã biết. Deep RNN stack nhiều recurrent layers để học pattern phức tạp hơn.",
      "formulas": [
        {
          "expression": "a[t] = g(Waa a[t-1] + Wax x[t] + ba)",
          "explanation": "Forward RNN cell cơ bản."
        },
        {
          "expression": "y_hat[t] = softmax(Wya a[t] + by)",
          "explanation": "Output tại time step t."
        },
        {
          "expression": "c_tilde[t] = tanh(Wc [Gamma_r * c[t-1], x[t]] + bc)",
          "explanation": "Candidate memory trong GRU/LSTM style."
        }
      ],
      "diagram": {
        "nodes": [
          "x[t]",
          "a[t-1]",
          "RNN cell",
          "y_hat[t]"
        ],
        "description": "RNN lặp cùng cell qua thời gian, truyền hidden state để giữ ngữ cảnh."
      },
      "example": "Dự đoán cảm xúc câu review là many-to-one: input là chuỗi từ, output là sentiment. Dịch máy là many-to-many: input và output đều là chuỗi.",
      "questions": [
        "How do you refer to the j-th word in the i-th training example?",
        "When is an RNN architecture appropriate with Tx = Ty?",
        "Which tasks use a many-to-one RNN architecture?",
        "What is the RNN estimating at time step t?",
        "How do you sample words from a trained language model RNN?",
        "What is the most likely cause of NaN values during RNN training?",
        "In an LSTM with 100-dimensional activations and 10000-word vocab, what is the dimension of Gamma_u?",
        "Which GRU simplification is less likely to suffer from vanishing gradients: removing Gamma_u or Gamma_r?",
        "In LSTM vs GRU, what are the equivalents of Update Gate and Forget Gate?",
        "For predicting a dog mood from past weather, should you use a unidirectional or bidirectional RNN?",
        "What is a peephole connection in an LSTM, and why can it help?"
      ],
      "answers": [
        {
          "question": "How do you refer to the j-th word in the i-th training example?",
          "answer": "Ký hiệu thường dùng là x^(i)<j>: token thứ j trong training example thứ i."
        },
        {
          "question": "When is an RNN architecture appropriate with Tx = Ty?",
          "answer": "Khi input và output có cùng độ dài, ví dụ POS tagging hoặc sequence labeling, mỗi input token có một output label tương ứng."
        },
        {
          "question": "Which tasks use a many-to-one RNN architecture?",
          "answer": "Sentiment classification, activity recognition hoặc bất kỳ task nào nhận cả sequence và xuất một nhãn duy nhất."
        },
        {
          "question": "What is the RNN estimating at time step t?",
          "answer": "Thường là phân phối xác suất của y<t> hoặc token tiếp theo, dựa trên input hiện tại và hidden state từ các bước trước."
        },
        {
          "question": "How do you sample words from a trained language model RNN?",
          "answer": "Bắt đầu bằng token khởi tạo, lấy softmax distribution, sample token tiếp theo, đưa token đó vào bước sau, lặp đến khi gặp end token hoặc đủ độ dài."
        },
        {
          "question": "What is the most likely cause of NaN values during RNN training?",
          "answer": "Exploding gradients là nguyên nhân phổ biến; thường dùng gradient clipping để giảm vấn đề này."
        },
        {
          "question": "In an LSTM with 100-dimensional activations and 10000-word vocab, what is the dimension of Gamma_u?",
          "answer": "Gamma_u là gate trên cell/activation dimension, nên có dimension 100 cho mỗi example, độc lập với vocab size 10000."
        },
        {
          "question": "Which GRU simplification is less likely to suffer from vanishing gradients: removing Gamma_u or Gamma_r?",
          "answer": "Giữ update gate Gamma_u quan trọng hơn cho long-term memory. Vì vậy nếu phải đơn giản hóa, bỏ Gamma_r thường ít gây vanishing gradients hơn bỏ Gamma_u."
        },
        {
          "question": "In LSTM vs GRU, what are the equivalents of Update Gate and Forget Gate?",
          "answer": "GRU update gate có vai trò gần với việc điều phối giữ/cập nhật memory; trong LSTM, forget gate quyết định giữ memory cũ và input/update gate quyết định ghi memory mới."
        },
        {
          "question": "For predicting a dog mood from past weather, should you use a unidirectional or bidirectional RNN?",
          "answer": "Dùng unidirectional RNN vì dự đoán tại hiện tại/tương lai chỉ nên dựa vào thời tiết quá khứ, không dùng thông tin tương lai."
        },
        {
          "question": "What is a peephole connection in an LSTM, and why can it help?",
          "answer": "A peephole connection feeds the previous cell state into gate computations. It can improve timing-sensitive decisions because gates can directly inspect memory state, not only hidden state and input."
        }
      ]
    },
    {
      "id": "section-5-2",
      "course": "Deep Learning",
      "chapter": "5",
      "deckId": "5.2",
      "deck": "NLP and Word Embeddings",
      "sourcePdf": "5.2 NLP and Word Embeddings.pdf",
      "title": "NLP and Word Embeddings",
      "keywords": [
        "word embeddings",
        "Word2Vec",
        "GloVe",
        "cosine similarity",
        "negative sampling",
        "sentiment",
        "debiasing"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu word representation, embeddings, analogy, Word2Vec, GloVe, sentiment classification và debiasing."
        },
        {
          "label": "Embedding",
          "value": "Biểu diễn từ bằng vector dense để nắm quan hệ ngữ nghĩa."
        },
        {
          "label": "Học embedding",
          "value": "Word2Vec/Skip-gram học từ context-target; GloVe dùng thống kê co-occurrence toàn cục."
        },
        {
          "label": "Ứng dụng",
          "value": "Transfer learning cho NLP, sentiment classification và analogy."
        }
      ],
      "theory": "One-hot vectors không biểu diễn được quan hệ giữa từ. Word embeddings ánh xạ từ thành vector dense, trong đó khoảng cách/hướng vector phản ánh similarity hoặc quan hệ như king - man + woman ≈ queen. Cosine similarity đo góc giữa hai vector. Embedding matrix E chứa vector cho từng từ. Word2Vec Skip-gram học dự đoán context/target nhưng softmax trên vocab lớn rất tốn; negative sampling biến bài toán thành nhiều binary classification nhỏ. GloVe học từ thống kê co-occurrence toàn corpus. Embeddings hỗ trợ transfer learning: pretrained vectors giúp task nhỏ học tốt hơn. Tuy nhiên embedding có thể học bias xã hội từ dữ liệu, nên cần debiasing: xác định bias direction, neutralize từ không định nghĩa bởi bias, và equalize các cặp cần cân bằng.",
      "formulas": [
        {
          "expression": "similarity(u, v) = dot(u, v) / (norm(u) norm(v))",
          "explanation": "Cosine similarity đo độ giống nhau giữa hai word vectors."
        },
        {
          "expression": "e_word = E o_word",
          "explanation": "Lấy embedding vector bằng embedding matrix nhân one-hot vector."
        },
        {
          "expression": "king - man + woman ≈ queen",
          "explanation": "Analogy trong embedding space."
        }
      ],
      "diagram": {
        "nodes": [
          "Word",
          "Embedding matrix",
          "Dense vector",
          "NLP task"
        ],
        "description": "Embedding biến token rời rạc thành vector liên tục để mô hình khai thác similarity và transfer learning."
      },
      "example": "Trong sentiment classification, pretrained word embeddings giúp mô hình hiểu rằng 'excellent' và 'great' gần nhau, ngay cả khi dataset sentiment nhỏ.",
      "questions": [
        "What is a word embedding?",
        "How do analogies work with word vectors?",
        "What does cosine similarity measure?",
        "Why is negative sampling useful?",
        "What is the difference between Word2Vec and GloVe?",
        "Why can embeddings contain bias?",
        "How do you debias word embeddings?"
      ],
      "answers": [
        {
          "question": "What is a word embedding?",
          "answer": "Là vector dense biểu diễn từ, học từ corpus sao cho từ có nghĩa/ngữ cảnh giống nhau nằm gần nhau."
        },
        {
          "question": "How do analogies work with word vectors?",
          "answer": "Quan hệ ngữ nghĩa thường là hướng vector. Ví dụ king - man + woman gần queen."
        },
        {
          "question": "What does cosine similarity measure?",
          "answer": "Đo độ gần về hướng giữa hai vector, ít phụ thuộc độ dài vector."
        },
        {
          "question": "Why is negative sampling useful?",
          "answer": "Nó tránh softmax trên toàn vocabulary lớn bằng cách học phân biệt target thật với một số negative examples."
        },
        {
          "question": "What is the difference between Word2Vec and GloVe?",
          "answer": "Word2Vec học qua prediction task cục bộ; GloVe dùng thống kê co-occurrence toàn cục."
        },
        {
          "question": "Why can embeddings contain bias?",
          "answer": "Vì embeddings học từ dữ liệu văn bản thật, mà dữ liệu có thể chứa bias xã hội như giới tính/nghề nghiệp."
        },
        {
          "question": "How do you debias word embeddings?",
          "answer": "Xác định bias direction, neutralize từ không definitional, rồi equalize các cặp cần cân bằng."
        }
      ]
    },
    {
      "id": "section-5-3",
      "course": "Deep Learning",
      "chapter": "5",
      "deckId": "5.3",
      "deck": "Sequence Models & Attention Mechanism",
      "sourcePdf": "5.3 Sequence Models & Attention Mechanism.pdf",
      "title": "Sequence Models and Attention",
      "keywords": [
        "seq2seq",
        "beam search",
        "BLEU",
        "attention",
        "speech recognition",
        "CTC",
        "trigger word"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu encoder-decoder, beam search, BLEU, attention, speech recognition, CTC và trigger word detection."
        },
        {
          "label": "Seq2seq",
          "value": "Encoder tạo biểu diễn input, decoder sinh output từng token."
        },
        {
          "label": "Beam search",
          "value": "Giữ nhiều candidate sequence thay vì greedy một lựa chọn."
        },
        {
          "label": "Attention",
          "value": "Cho decoder tập trung vào các phần input khác nhau ở từng bước output."
        }
      ],
      "theory": "Sequence-to-sequence models dùng encoder để đọc input sequence và decoder để sinh output sequence, ví dụ machine translation hoặc image captioning. Greedy search chọn token tốt nhất từng bước nhưng có thể bỏ lỡ câu tốt hơn tổng thể. Beam search giữ B candidate tốt nhất, cân bằng chất lượng và chi phí. Vì xác suất câu dài là tích nhiều xác suất nhỏ, length normalization giúp tránh bias về câu ngắn. BLEU score đánh giá translation bằng n-gram overlap với reference. Attention giải quyết vấn đề bottleneck của encoder-decoder cổ điển: tại mỗi output step, decoder học attention weights trên các hidden states của input. Speech recognition có thể dùng attention hoặc CTC. CTC collapse repeated characters và blank tokens để ánh xạ chuỗi frame dài thành transcript ngắn. Trigger word detection dự đoán tại từng thời điểm audio có xuất hiện keyword hay không.",
      "formulas": [
        {
          "expression": "score(y) = (1 / Ty^alpha) sum_t log P(y[t] | x, y[<t])",
          "explanation": "Length-normalized beam search score."
        },
        {
          "expression": "c[t] = sum_tprime alpha[t,tprime] a[tprime]",
          "explanation": "Context vector là tổng có trọng số của hidden states input."
        },
        {
          "expression": "sum_tprime alpha[t,tprime] = 1",
          "explanation": "Attention weights tại một output step tạo thành phân phối trên input positions."
        }
      ],
      "diagram": {
        "nodes": [
          "Encoder states",
          "Attention weights",
          "Context vector",
          "Decoder output"
        ],
        "description": "Attention cho phép decoder chọn phần input quan trọng ở mỗi bước sinh output."
      },
      "example": "Trong dịch câu dài, attention giúp từ đang sinh ở tiếng Việt nhìn trực tiếp vào từ/cụm từ liên quan trong câu nguồn thay vì phụ thuộc một vector context duy nhất.",
      "questions": [
        "Is the encoder modeling the probability of the input sentence in a conditional language model?",
        "What are the effects of increasing beam width in beam search?",
        "Without sentence normalization, does beam search tend to output shorter translations?",
        "If P(y*) <= P(yhat), will increasing beam width help improve the translation?",
        "If P(y*) > P(yhat) in most mistakes, should you focus on improving the search algorithm?",
        "What do we expect of attention weights alpha<t,tprime>?",
        "Why cannot we use s<t> instead of s<t-1> to compute attention scores e<t,tprime>?",
        "When does attention outperform encoder-decoder models without attention?",
        "What does the CTC model collapse the string c-oo-kk-bb-oo-oo-kk to?",
        "In trigger word detection, what is x<t>?",
        "What is trigger word detection?",
        "Why does a vanilla encoder-decoder often struggle on long sentences?"
      ],
      "answers": [
        {
          "question": "Is the encoder modeling the probability of the input sentence in a conditional language model?",
          "answer": "Không. Encoder tạo representation của input x; decoder mô hình hóa P(y|x), tức xác suất output/translation có điều kiện trên input."
        },
        {
          "question": "What are the effects of increasing beam width in beam search?",
          "answer": "Beam width lớn hơn thường tìm được sequence tốt hơn nhưng tăng computation và memory; lợi ích giảm dần khi B quá lớn."
        },
        {
          "question": "Without sentence normalization, does beam search tend to output shorter translations?",
          "answer": "Có. Vì xác suất chuỗi là tích nhiều xác suất nhỏ, câu dài bị phạt mạnh hơn; length normalization giảm bias này."
        },
        {
          "question": "If P(y*) <= P(yhat), will increasing beam width help improve the translation?",
          "answer": "Không nhiều. Nếu model chấm bản sai yhat cao hơn hoặc bằng bản đúng y*, lỗi chính là model, không phải search."
        },
        {
          "question": "If P(y*) > P(yhat) in most mistakes, should you focus on improving the search algorithm?",
          "answer": "Có. Nếu model đã cho bản đúng xác suất cao hơn nhưng beam search vẫn không tìm ra, vấn đề nằm nhiều ở search; tăng beam width hoặc cải thiện search có ích."
        },
        {
          "question": "What do we expect of attention weights alpha<t,tprime>?",
          "answer": "Tại mỗi output step t, các alpha<t,tprime> tạo thành phân phối trên input positions, thường không âm và tổng theo tprime bằng 1."
        },
        {
          "question": "Why cannot we use s<t> instead of s<t-1> to compute attention scores e<t,tprime>?",
          "answer": "Vì s<t> là decoder state hiện tại và phụ thuộc vào context/attention đang cần tính. Dùng s<t> sẽ tạo phụ thuộc vòng; ta dùng s<t-1> đã biết từ bước trước."
        },
        {
          "question": "When does attention outperform encoder-decoder models without attention?",
          "answer": "Đặc biệt với sequence dài, vì attention cho decoder truy cập trực tiếp các encoder states thay vì nén toàn bộ input vào một vector duy nhất."
        },
        {
          "question": "What does the CTC model collapse the string c-oo-kk-bb-oo-oo-kk to?",
          "answer": "CTC bỏ blank \"-\" và gộp ký tự lặp phù hợp, kết quả là \"cookbook\"."
        },
        {
          "question": "In trigger word detection, what is x<t>?",
          "answer": "x<t> là audio feature/frame tại thời điểm t, ví dụ một lát spectrogram được đưa vào sequence model."
        },
        {
          "question": "What is trigger word detection?",
          "answer": "It is a real-time audio task that predicts whether a wake word (for example, 'Hey Siri' or 'Okay Google') is present at each time step in an audio stream."
        },
        {
          "question": "Why does a vanilla encoder-decoder often struggle on long sentences?",
          "answer": "Because compressing a long input into a single fixed-size context vector creates a bottleneck. Attention helps by letting the decoder revisit different encoder states at each output step."
        }
      ]
    },
    {
      "id": "section-5-4",
      "course": "Deep Learning",
      "chapter": "5",
      "deckId": "5.4",
      "deck": "Transformer Network",
      "sourcePdf": "5.4 Transformer Network.pdf",
      "title": "Transformer Network",
      "keywords": [
        "Transformer",
        "self-attention",
        "multi-head attention",
        "positional encoding",
        "encoder",
        "decoder",
        "masking"
      ],
      "studyTable": [
        {
          "label": "Mục tiêu",
          "value": "Hiểu motivation của Transformer, self-attention, multi-head attention, encoder/decoder blocks, positional encoding và masking."
        },
        {
          "label": "Self-attention",
          "value": "Mỗi token tính quan hệ với các token khác trong cùng sequence."
        },
        {
          "label": "Multi-head",
          "value": "Nhiều attention heads học nhiều kiểu quan hệ song song."
        },
        {
          "label": "Ưu điểm",
          "value": "Song song hóa tốt hơn RNN và xử lý long-range dependencies hiệu quả."
        }
      ],
      "theory": "Transformer thay thế recurrence bằng self-attention. Với mỗi token, mô hình tạo query, key và value. Attention score giữa query của token hiện tại và key của token khác quyết định value nào được tổng hợp mạnh hơn. Vì self-attention không tự biết thứ tự token, positional encoding được thêm vào embedding. Multi-head attention chạy nhiều attention heads song song để học nhiều quan hệ khác nhau, rồi concat kết quả. Encoder block thường gồm multi-head self-attention, feed-forward network, residual connections và layer normalization. Decoder có masked self-attention để không nhìn token tương lai, encoder-decoder attention để nhìn source sequence, rồi feed-forward. Transformer train song song tốt hơn RNN và trở thành nền tảng cho nhiều mô hình NLP như BERT/GPT.",
      "formulas": [
        {
          "expression": "Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) V",
          "explanation": "Scaled dot-product attention."
        },
        {
          "expression": "head_i = Attention(QW_iQ, KW_iK, VW_iV)",
          "explanation": "Mỗi head dùng projection riêng cho Q, K, V."
        },
        {
          "expression": "MultiHead = concat(head_1, ..., head_h) W_O",
          "explanation": "Multi-head attention nối các heads rồi chiếu lại."
        }
      ],
      "diagram": {
        "nodes": [
          "Token embeddings",
          "Self-attention",
          "Feed-forward",
          "Encoder/decoder stack"
        ],
        "description": "Transformer lặp các block attention và feed-forward, kết hợp positional encoding, residual và normalization."
      },
      "example": "Trong câu 'The animal didn't cross the street because it was tired', self-attention giúp token 'it' chú ý mạnh tới 'animal' để hiểu đại từ đang nói tới gì.",
      "questions": [
        "Why do Transformers use positional encoding?",
        "What are Q, K, V?",
        "Why scale by sqrt(d_k)?",
        "What does multi-head attention add?",
        "Why is masking needed in decoder?",
        "Why can Transformers train more parallel than RNNs?"
      ],
      "answers": [
        {
          "question": "Why do Transformers use positional encoding?",
          "answer": "Self-attention không có recurrence nên không tự biết thứ tự token. Positional encoding thêm thông tin vị trí vào embeddings."
        },
        {
          "question": "What are Q, K, V?",
          "answer": "Query là vector đi tìm thông tin, key là vector để so khớp mức liên quan, value là nội dung được tổng hợp theo attention weights."
        },
        {
          "question": "Why scale by sqrt(d_k)?",
          "answer": "Để dot products không quá lớn khi dimension cao, tránh softmax quá sắc và gradient nhỏ."
        },
        {
          "question": "What does multi-head attention add?",
          "answer": "Nó cho phép mô hình học nhiều quan hệ song song, ví dụ cú pháp, đồng tham chiếu, vị trí và ngữ nghĩa."
        },
        {
          "question": "Why is masking needed in decoder?",
          "answer": "Khi sinh sequence, decoder không được nhìn token tương lai; mask giữ tính autoregressive."
        },
        {
          "question": "Why can Transformers train more parallel than RNNs?",
          "answer": "Self-attention xử lý toàn bộ sequence bằng ma trận, không cần chờ hidden state từng bước như RNN."
        }
      ]
    }
  ]
};
