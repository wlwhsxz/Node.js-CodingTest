/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // nums1에서의 마지막 유효한 요소의 인덱스
    let j = n - 1; // nums2에서의 마지막 요소의 인덱스
    let k = m + n - 1; // 병합된 배열에서 마지막 요소의 인덱스

    // nums1과 nums2 둘 다 순회할 때까지 반복
    while (i >= 0 && j >= 0) {
        // 더 큰 값을 nums1[k]에 할당
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // nums2에 남은 요소가 있다면, nums1의 앞부분에 복사
    // (nums1의 남은 요소는 이미 올바른 위치에 있으므로 이동할 필요 없음)
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};