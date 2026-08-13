<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Initialize session storage with seed data on first request
if (!isset($_SESSION['messages'])) {
    $_SESSION['messages'] = [
        1 => [
            'id' => 1,
            'title' => 'Welcome',
            'body' => 'This is the first message on the postboard!',
            'created_at' => '2026-08-12T10:00:00Z',
        ],
    ];
    $_SESSION['nextId'] = 2;
}

$messages = &$_SESSION['messages'];
$nextId = &$_SESSION['nextId'];

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Route: GET /api/messages
if ($method === 'GET' && $path === '/api/messages') {
    echo json_encode(array_values($messages));
    exit;
}

// Route: POST /api/messages
if ($method === 'POST' && $path === '/api/messages') {
    $input = json_decode(file_get_contents('php://input'), true);

    $message = [
        'id' => $nextId++,
        'title' => $input['title'],
        'body' => $input['body'],
        'created_at' => gmdate('Y-m-d\TH:i:s\Z'),
    ];
    $messages[$message['id']] = $message;

    http_response_code(200);
    echo json_encode($message);
    exit;
}

// Route: PUT /api/messages/{id}
if ($method === 'PUT' && preg_match('#^/api/messages/(\d+)$#', $path, $matches)) {
    $id = (int) $matches[1];

    if (!isset($messages[$id])) {
        http_response_code(404);
        echo json_encode(['error' => 'Message not found']);
        exit;
    }

    $input = json_decode(file_get_contents('php://input'), true);

    $messages[$id]['title'] = $input['title'];
    $messages[$id]['body'] = $input['body'];

    echo json_encode($messages[$id]);
    exit;
}

// Route: DELETE /api/messages/{id}
if ($method === 'DELETE' && preg_match('#^/api/messages/(\d+)$#', $path, $matches)) {
    $id = (int) $matches[1];

    if (!isset($messages[$id])) {
        http_response_code(404);
        echo json_encode(['error' => 'Message not found']);
        exit;
    }

    unset($messages[$id]);

    http_response_code(204);
    exit;
}

http_response_code(404);
echo json_encode(['error' => 'Not found']);
