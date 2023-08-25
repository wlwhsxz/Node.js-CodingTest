function solution(n, left, right) {
    return Array.from({length: right - left + 1}, (_, i) => {
        const place = i + left;
        return Math.max(place % n, Math.floor(place / n)) + 1;
    });
}

// 1, 2, 3
// 2, 2, 3
// 3, 3, 3